import React, { useState } from 'react';

function CityWeatherView({ city, weatherData, onAddCity, isSignedIn, navigateToHome }) {
  // Display the weather data for the searched city
  return (
    <div>
      <h1>Weather for {city}</h1>
      <p>{weatherData.main.temp}°C, {weatherData.weather[0].main}</p>
      {isSignedIn && (
        <button onClick={() => onAddCity(city)}>Pin this city to home view</button>
      )}
      <button onClick={navigateToHome}>Go back to home</button>
    </div>
  );
}

export default CityWeatherView;
