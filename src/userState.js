import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        details: {
            userId: '',
            pinnedCities: [],
        },
    },
    reducers: {
        loginUser: function(state, action) {
            state.isLoggedIn = true;
            state.details.userId = action.payload.userId;
            state.details.pinnedCities = action.payload.pinnedCities;
        },
        logoutUser: function(state) {
            state.isLoggedIn = false;
            state.details = { userId: '', pinnedCities: [] };
        },
        pinCity: function(state, action) {
            const city = action.payload;
            if (!state.details.pinnedCities.includes(city)) {
                state.details.pinnedCities.push(city);
            } else {
                console.log('City is already pinned');
            }
        },
        unpinCity: function(state, action) {
            const city = action.payload;
            state.details.pinnedCities = state.details.pinnedCities.filter(
                existingCity => existingCity !== city
            );
        },
        updatePinnedCities: function(state, action) {
            state.details.pinnedCities = action.payload;
        }
    },
});

export const { loginUser, logoutUser, pinCity, unpinCity, updatePinnedCities } = userSlice.actions;

export default userSlice.reducer;
