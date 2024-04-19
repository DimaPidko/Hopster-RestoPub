import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMobile: window.innerWidth <= 768,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        handleResize: (state, action) => {
            state.isMobile = action.payload;
        },
    },
});

const { actions, reducer } = navigationSlice;

export default reducer;
export const { handleResize } = actions;
