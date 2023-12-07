import React from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePresenter from './presenters/homePresenter';
import AddCityPresenter from './presenters/addCitiesPresenter';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<HomePresenter />} />
                            <Route path="/addCities" element={<AddCityPresenter />} />

                        </Routes>
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;