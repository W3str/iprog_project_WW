import { API_KEY } from '../apiConfig';

// Function to get coordinates from a city name
export function coordsFromCity(city) {
    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    return fetch(geocodingUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data && data.length > 0) {
                return { lat: data[0].lat, lon: data[0].lon };
            } else {
                throw new Error('No data found for the specified city');
            }
        });
}

// Function to get weather data from city coordinates
export function weatherFromCity(city) {
    return coordsFromCity(city)
        .then(function(coords) {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${API_KEY}`;
            return fetch(weatherUrl);
        })
        .then(function(response) {
            return response.json();
        });
}
