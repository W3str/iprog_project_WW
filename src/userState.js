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
      if (!state.details.pinnedCities.includes(action.payload)) {
        state.details.pinnedCities.push(action.payload);
      }
    },
    unpinCity: function(state, action) {
      state.details.pinnedCities = state.details.pinnedCities.filter(
        function(city) {
          return city !== action.payload;
        }
      );
    },
  },
});

export const { loginUser, logoutUser, pinCity, unpinCity } = userSlice.actions;

export default userSlice.reducer;
