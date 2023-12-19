import React, { useEffect, useState } from 'react';
import { signInWithGoogle, signOutFromGoogle } from '../model/firebaseModel';
import { weatherFromCity } from '../api/weatherAPI';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../userState';
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
                // Prevent navigation to /cityWeather when search fails
            });
    }

    useEffect(() => {
        // Update the default cities list to include pinned cities for signed-in users
        let cities = isSignedIn && pinnedCities.length > 0 ? pinnedCities : ['London', 'Stockholm', 'Beirut'];

        function handleWeatherData(data) {
            const formattedData = data.reduce((acc, current, index) => {
                acc[cities[index]] = current;
                return acc;
            }, {});
            setWeatherData(formattedData);
        }

        function handleError(error) {
            console.error('Error fetching weather data for default cities: ', error);
        }

        Promise.all(cities.map(weatherFromCity))
            .then(handleWeatherData)
            .catch(handleError);
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
        />
    );
}

export default HomePresenter;
