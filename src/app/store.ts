/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {configureStore, combineReducers, } from '@reduxjs/toolkit';
import { userApi } from '../redux/user';


const rootReducer = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
},
);


const store = configureStore({
    reducer:rootReducer,
    middleware:getDefaultMiddleware=>{
        return getDefaultMiddleware().concat(userApi.middleware)
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;
