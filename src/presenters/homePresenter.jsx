import React, { useEffect, useState } from 'react';
import { signInWithGoogle, signOutFromGoogle, addPinnedCity, removePinnedCity, fetchPinnedCities } from '../model/firebaseModel';
import { weatherFromCity } from '../api/weatherAPI';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser, pinCity, unpinCity, updatePinnedCities } from '../userState';

import HomeView from '../views/homeView';
import { useNavigate } from 'react-router-dom';


function HomePresenter() {
    const [weatherData, setWeatherData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pinnedCities = useSelector(state => state.user.details.pinnedCities);
    const isSignedIn = useSelector(state => state.user.isLoggedIn);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchError, setSearchError] = useState(''); 

    const handleError = (error) => {
        console.error('Error fetching weather data:', error);
    };

    const handleUnpinCity = async (city) => {
        try {
            await removePinnedCity(city);
            console.log(`[Unpin City] City ${city} unpinned successfully.`);
            const updatedPinnedCities = await fetchPinnedCities(); // Fetch updated list
            dispatch(updatePinnedCities(updatedPinnedCities)); // Update Redux state
        } catch (error) {
            console.error(`[Unpin City] Failed to unpin city ${city}: `, error);
        }
    };

    function handleSignIn() {
        signInWithGoogle()
            .then(function(result) {
                dispatch(loginUser(result));
                window.location.reload();
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    function handleSignOut() {
        signOutFromGoogle()
            .then(function() {
                dispatch(logoutUser());
                window.location.reload();
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    function navigateToPinCity() {
        navigate('/addcities');
    }

    function handleSearch() {
        console.log(`[Search] Initiating search for city: ${searchTerm}`);
        weatherFromCity(searchTerm)
            .then((data) => {
                console.log(`[Search] Search successful for city: ${searchTerm}`, data);
                console.log(`[HomePresenter] Navigating to cityWeather with data for city: ${searchTerm}`);
                navigate('/cityWeather', { state: { city: searchTerm, weatherData: data } });
            })
            .catch((error) => {
                console.error(`[Search] Search failed for city: ${searchTerm}: `, error);
                setSearchError('City not found. Try again.');
            });
    }

    useEffect(() => {
        function handleWeatherData(data, cities) {
            const formattedData = data.reduce((acc, current, index) => {
                acc[cities[index]] = current;
                return acc;
            }, {});
            setWeatherData(formattedData);
        }

        // Fetch weather data only for pinned cities if the user is signed in
        if (isSignedIn) {
            if (pinnedCities.length > 0) {
                Promise.all(pinnedCities.map(weatherFromCity))
                    .then(data => handleWeatherData(data, pinnedCities))
                    .catch(handleError);
            } else {
                setWeatherData({});
            }
        } else {
            const defaultCities = ['London', 'Stockholm', 'Beirut'];
            Promise.all(defaultCities.map(weatherFromCity))
                .then(data => handleWeatherData(data, defaultCities))
                .catch(handleError);
        }
    }, [isSignedIn, pinnedCities]);

    return (
        <HomeView
            navigateToPinCity={navigateToPinCity}
            weatherData={weatherData}
            handleSignIn={handleSignIn}
            handleSignOut={handleSignOut}
            isSignedIn={isSignedIn}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            searchError={searchError}
            onUnpinCity={handleUnpinCity}
        />
    );
}

export default HomePresenter;
