// HomePresenter.js
import React, { useEffect, useState } from 'react';
import { weatherFromCity } from '../api/weatherAPI';
import { signInWithGoogle, monitorAuthState } from '../model/firebaseModel'; 
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../userState';
import HomeView from '../views/homeView';
import { useNavigate } from 'react-router-dom';
function HomePresenter() {
    const [weatherData, setWeatherData] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const pinnedCities = useSelector(state => state.user.details.pinnedCities);
    const isSignedIn = useSelector(state => state.user.isLoggedIn);

    function handleSignIn() {
        signInWithGoogle()
            .then(function(result) {
                console.log(result)
                dispatch(loginUser(result))
                window.location.reload();
            })
            .catch(function(error) {
                console.error(error);
            });
    }
    function navigateToPinCity() {
        navigate('/addcities')
    }

    useEffect(function() {
        let cities = [];
        if (!isSignedIn){
        cities = ['London', 'Stockholm', 'Beirut'];
        }else{
            cities = pinnedCities
        }
        function handleWeatherData(data) {
            const formattedData = data.reduce(function(acc, current, index) {
                acc[cities[index]] = current;
                return acc;
            }, {});
            setWeatherData(formattedData);
        }

        function handleError(error) {
            console.error(error);
        }

        Promise.all(cities.map(weatherFromCity))
            .then(handleWeatherData)
            .catch(handleError);
    }, []);

    return (
        <HomeView navigateToPinCity={navigateToPinCity} weatherData={weatherData} handleSignIn={handleSignIn} isSignedIn={isSignedIn}/>
    );
}

export default HomePresenter;