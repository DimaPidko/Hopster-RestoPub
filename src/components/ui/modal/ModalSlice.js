import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    onModal: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeModalActivity: (state) => {
            state.onModal = !state.onModal;
        },
    },
});

const { actions, reducer } = modalSlice;

export default reducer;
export const { changeModalActivity } = actions;
