// HomePresenter.js
import React, { useEffect, useState } from 'react';
import { weatherFromCity } from '../api/weatherAPI';
import { signInWithGoogle, monitorAuthState } from '../model/firebaseModel'; 

function HomePresenter() {
    const [weatherData, setWeatherData] = useState({});
    const [isSignedIn, setIsSignedIn] = useState(false);

    function handleSignIn() {
        signInWithGoogle()
            .then(function(result) {
                // Handle signed-in user information
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    function handleAuthStateChange(user) {
        setIsSignedIn(!!user);
    }

    useEffect(function() {
        const unsubscribe = monitorAuthState(handleAuthStateChange);
        return function cleanup() {
            unsubscribe();
        };
    }, []);

    useEffect(function() {
        const cities = ['London', 'Stockholm', 'Beirut'];
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
        <div className="HomePresenter">
            <h1>Moist Map</h1>
            {isSignedIn ? (
                <div>Welcome, user!</div>
            ) : (
                <button onClick={handleSignIn}>Sign In with Google</button>
            )}
            <div className="searchResults">
                {Object.entries(weatherData).map(function([city, data]) {
                    return (
                        <p key={city}>{`${city}: ${data.main.temp}°C, ${data.weather[0].main}`}</p>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePresenter;
