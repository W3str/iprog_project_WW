import React, { useState } from 'react';

function CityWeatherView({ city, weatherData, onAddCity, isSignedIn, navigateToHome, pinError }) {
	// Display the weather data for the searched city
	return (
		<div className="searchResults">
		<h1>Weather for {city}</h1>
		<div className="searchResults"><p>{weatherData.main.temp}°C, {weatherData.weather[0].main}</p></div>
		{isSignedIn && (
			<>
			<button className="button2" onClick={() => onAddCity(city)}>Pin this city to home view</button>
			{pinError && <div className='error'><p>{pinError}</p></div>}
			</>
		)}
		<button className="button2" onClick={navigateToHome}>Go back to home</button>
        </div>
	);
	}

export default CityWeatherView;
