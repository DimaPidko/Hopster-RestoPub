import { configureStore } from '@reduxjs/toolkit';

const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action,
        });
    }
    return next(action);
};

const store = configureStore({
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(stringMiddleWare),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
