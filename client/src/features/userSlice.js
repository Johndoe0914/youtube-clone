import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthenticated: localStorage.getItem("token")
  },


  reducers: {
    login: (state, action) => { 
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout: (state ) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
});

export const { login, logout } = userSlice.actions;

// Grab the user
export const selectUser = state => state.user.user;
export const isAuthenticated = state => state.user.isAuthenticated;

export default userSlice.reducer;
