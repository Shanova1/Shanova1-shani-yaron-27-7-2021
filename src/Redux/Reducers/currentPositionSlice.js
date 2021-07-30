import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPosition: '',
    showCurrentPosiotion: true,
}

const currentPositionSlice = createSlice({
    name: 'currentPosition',
    initialState,
    reducers: {
        setCurrentPosition: (state, action) => {
            state.currentPosition = action.payload;
        },
        setShowCurrentPosition: (state, action) => {
            state.showCurrentPosiotion = action.payload;
        }
    }
})

export const { setCurrentPosition, setShowCurrentPosition } = currentPositionSlice.actions;

export default currentPositionSlice.reducer;

