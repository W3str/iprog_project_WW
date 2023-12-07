import React from 'react';


function HomeView(props) {
    const handleSignIn = () => {
        props.handleSignIn()
    }

const navigateToPinCity = () => {
    props.navigateToPinCity()
}

    return (
        <div className="HomePresenter">
            <h1>Moist Map</h1>
            {props.isSignedIn ? (
                <div>Welcome, user!</div>
            ) : (
                <button onClick={handleSignIn}>Sign In with Google</button>
            )}
            <div className="searchResults">
                {Object.entries(props.weatherData).map(function([city, data]) {
                    return (
                        <p key={city}>{`${city}: ${data.main.temp}°C, ${data.weather[0].main}`}</p>
                    );
                })}
            <button onClick={navigateToPinCity}>Pin Cities</button>
            </div>
        </div>
    );
}

export default HomeView;