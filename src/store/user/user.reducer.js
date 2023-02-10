import store from 'store';
import {createReducer} from '@reduxjs/toolkit';
import {signUp, signIn, clearUser} from './user.action';

const initialState = {
    user: store.get('user'),
    accessToken: store.get('access_token'),
};

const userReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.userData;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.userData;
            })
            .addCase(clearUser, (state, action) => {
                state.accessToken = null;
                state.user = null;
            })
    });
export default userReducer;