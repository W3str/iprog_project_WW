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
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve({ lat: data[0].lat, lon: data[0].lon });
                    }, 3000);
                });
            } else {
                throw new Error('No data found for the specified city');
            }
        });
}

// Function to get weather data from city coordinates
export function weatherFromCity(city) {
    return coordsFromCity(city)
        .then(coords => {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${API_KEY}`;
            return fetch(weatherUrl)
                .then(response => {
                    console.log(`[weatherAPI] Fetching weather data for coordinates: ${coords.lat}, ${coords.lon}`);
                    if (!response.ok) {
                        console.error(`[weatherAPI] Failed to fetch weather data for coordinates: ${coords.lat}, ${coords.lon}`);
                        throw new Error('Failed to fetch weather data');
                    }
                    return response.json();
                });
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
            throw new Error('City not found');
        });
}