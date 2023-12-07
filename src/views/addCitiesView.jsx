import React, { useState } from 'react';

function addCityView(props) {
  const [city, setCity] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      props.onAddCity(city);
      setCity(''); 
    }
  };

  const navigateToWeather = () => {
    props.navigateToWeather();
  };
  if (!props.isSignedIn){
        return (
            <div>
                <h1>Moist Map</h1>
                <h2>You have to log in, go back to weather</h2>
                <button onClick={navigateToWeather}>Weather</button>
                </div>
        )
        }
        return (
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city name"
                />
                <button type="submit">Add City</button>
                <button onClick={navigateToWeather}>Weather</button>
              </form>
            </div>
          );
}

export default addCityView;
