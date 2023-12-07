import { useDispatch, useSelector } from "react-redux";
import AddCityView from "../views/addCitiesView";
import { pinCity } from "../userState.js";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { addPinnedCity } from "../model/firebaseModel.js";

function AddCityPresenter() {
    const dispatch = useDispatch()
    const isSignedIn = useSelector(state => state.user.isLoggedIn);
    const navigate = useNavigate();

    function handleAddCity(city) {
        dispatch(pinCity(city))
        addPinnedCity(city)
    }

    function navigateToWeather() {
        navigate('/')
    };

    return (
        <AddCityView onAddCity={handleAddCity} isSignedIn={isSignedIn} navigateToWeather={navigateToWeather}/>
    );
}

export default AddCityPresenter;