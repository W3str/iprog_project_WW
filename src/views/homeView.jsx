import React from 'react';


function HomeView(props) {
    return (
        <div className="HomePresenter">
            <h1>Moist Map</h1>
            {props.isSignedIn ? (
                <>
                    <div>Welcome, user!</div>
                    <button onClick={props.handleSignOut}>Sign Out</button>
                </>
            ) : (
                <button onClick={props.handleSignIn}>Sign In with Google</button>
            )}
            <div className="searchResults">
                {Object.entries(props.weatherData).map(function([city, data]) {
                    return (
                        <p key={city}>{`${city}: ${data.main.temp}°C, ${data.weather[0].main}`}</p>
                    );
                })}
                <input
                    type="text"
                    value={props.searchTerm}
                    onChange={(e) => props.setSearchTerm(e.target.value)}
                    placeholder="Search for a city"
                />
                <button onClick={props.handleSearch}>Search</button>
                {props.searchError && <p>{props.searchError}</p>}
            </div>
        </div>
    );
}

export default HomeView;