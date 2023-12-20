import { useDispatch, useSelector } from "react-redux";
import CityWeatherView from "../views/cityWeatherView.jsx";
import { pinCity } from "../userState.js";
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState }  from 'react';
import { addPinnedCity } from "../model/firebaseModel.js";

function CityWeatherPresenter() {
    const navigate = useNavigate();
    const location = useLocation();
    const { city, weatherData } = location.state || {};

    // Check if the required state is present, otherwise redirect to home
    if (!city || !weatherData) {
        console.error('[CityWeatherPresenter] Missing city or weather data, redirecting to home.');
        navigate('/');
        return null;
    }
    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => state.user.isLoggedIn);

    const [pinError, setPinError] = useState('');
 
    const handleAddCity = (city) => {
        if (!isSignedIn) {
            console.log('[Pin City] User must be signed in to pin cities.');
            return;
        }
        addPinnedCity(city)
            .then(() => {
                dispatch(pinCity(city));
                console.log(`[Pin City] City ${city} pinned successfully.`);
                navigate('/');
            })
            .catch((error) => {
                // Update the state to show the error message to the user
                setPinError(error.message);
            });
    };

    return (
    <CityWeatherView
        city={city}
        weatherData={weatherData}
        onAddCity={handleAddCity}
        isSignedIn={isSignedIn}
        navigateToHome={() => navigate('/')}
        pinError={pinError} 
    />
);
}

export default CityWeatherPresenter;