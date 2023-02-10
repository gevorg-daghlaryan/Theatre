import {createAsyncThunk} from '@reduxjs/toolkit';
import {CLEAR_USER, SIGN_IN, SIGN_UP} from './user.actionTypes';
import store from 'store';
import {createAction} from '@reduxjs/toolkit';

//services
import AuthService from '../../Service/AuthService';
import UserService from '../../Service/UserService';


export const signUp = createAsyncThunk(
    SIGN_UP,
    async (data) => {
        try {
            const response = await AuthService.signUp({
                email: data.email,
                password: data.password
            });

            if(response?.error) {
                throw response.error;
            }

            const userData = {
                email: data.email,
                fullName: data.fullName,
                role: 'user',
                id: response.localId,
            };
            await  UserService.createUser(userData.id, userData);

            store.set('access_token', response.idToken);
            store.set('user', userData);

            return {
                userData,
                accessToken: response.idToken,
            };

        } catch(e) {
            console.log(e)
        }
    }
);
export const clearUser = createAction(CLEAR_USER);
export const signIn = createAsyncThunk(
    SIGN_IN,
    async (data) => {
        try {
            const responseData = await AuthService.signIn({
                email: data.email,
                password: data.password,
            });

            if (responseData?.error) {
                throw responseData.error;
            }

            try {
                const userData = await UserService.getUser(responseData.localId);

                if (userData?.error) {
                    throw userData.error;
                }

                store.set('access_token', responseData.idToken);
                store.set('user', userData);

                return {
                    userData,
                    accessToken: responseData.idToken,
                }

            } catch (e) {
                console.log(e)
            }

        } catch(e) {
            console.log(e)
        }
    }
)
