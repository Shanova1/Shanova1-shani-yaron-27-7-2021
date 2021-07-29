import { createSlice } from "@reduxjs/toolkit";
// import {getCurrentPosition} from '../Services/Geolocation'

const initialState = {
    currentPosition: ''
}

const currentPositionSlice = createSlice({
    name: 'currentPosition',
    initialState,
    reducers: {
        setCurrentPosition: (state, action) => {
            state.currentPosition = action.payload;
        }
    }
})

export const { setCurrentPosition } = currentPositionSlice.actions;

export default currentPositionSlice.reducer;

