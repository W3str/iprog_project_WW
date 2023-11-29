import React from 'react';
import { weatherFromCity } from '../api/weatherAPI'; 

function HomePresenter() {
    const [weatherData, setWeatherData] = React.useState({});

    // Effect hook to fetch data when the component mounts
    React.useEffect(function() {
        const cities = ['London', 'Stockholm', 'Beirut']; 
        Promise.all(cities.map(function(city) {
            return weatherFromCity(city);
        }))
        .then(function(data) {
            const formattedData = data.reduce(function(acc, current, index) {
                acc[cities[index]] = current;
                return acc;
            }, {});
            setWeatherData(formattedData);
        })
        .catch(function(error) {
            console.error(error);
        });
    }, []);

    // Render function returns the UI for the component
    return (
        <div className="HomePresenter">
            <h1>Moist Map</h1>
            <div className="searchResults">
                {Object.entries(weatherData).map(function([city, data]) {
                    return (
                        <p key={city}>{`${city} ${data.main.temp}°C ${data.weather[0].main}`}</p>
                    );
                })}
            </div>
            {/* Additional content */}
        </div>
    );
}

export default HomePresenter;
