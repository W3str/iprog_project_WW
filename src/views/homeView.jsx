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
                {props.weatherData && Object.keys(props.weatherData).length > 0 ? (
                    Object.entries(props.weatherData).map(([city, data]) => (
                        <div key={city}>
                            <p>{`${city}: ${data.main.temp}°C, ${data.weather[0].main}`}</p>
                            {props.isSignedIn && (
                                <button onClick={() => props.onUnpinCity(city)}>X</button>
                            )}
                        </div>
                    ))
                ) : props.isSignedIn ? (
                    <p>This is your home. Start by adding cities you are interested in!</p>
                ) : null}
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