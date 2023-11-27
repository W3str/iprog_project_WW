import React from 'react';

function HomePresenter() {
  // This will eventually handle presentation logic and pass data to the HomeView
	return (
		<div className="HomePresenter">
		<h1>Moist Map</h1>
		<div className="searchResults">
			<p>London 13°C Rainy</p>
			<p>Stockholm 10°C Cloudy</p>
		</div>
		<div className="stockholmData">
			<h2>Stockholm</h2>
			<div className="dataContainer">
			<p>10°C</p>
			<p>15°C</p>
			<p>13°C</p>
			</div>
		</div>
		</div>
	);
}

export default HomePresenter;
