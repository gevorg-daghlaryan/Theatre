import {createAsyncThunk} from '@reduxjs/toolkit';
import {CREATE_PLAY, DELETE_PLAY, EDIT_PLAY, GET_PLAY, GET_PLAYS} from './play.actionTypes';

//service
import PlayService from '../../Service/PlayService';

//helpers
import objectToArray from '../../helpers/objectToArray';

export const createPlay = createAsyncThunk(
    CREATE_PLAY,
    async (data, { dispatch }) => {
        try {
            const response = await PlayService.cretePlay(data);

            if (response?.error) {
                throw response.error;
            }
           await dispatch(getPlays());

        } catch (e) {
            console.log(e)
        }
    }
)

export const getPlays = createAsyncThunk(
    GET_PLAYS,
    async (_, {dispatch}) => {
        try {
            const response = await PlayService.getPlays();

            if (response?.error) {
                throw response.error;
            }

            const res = objectToArray.objectToArray(response);
            return res;

        } catch (e) {
            console.log(e)
        }
    }
)
export const getPlay = createAsyncThunk(
    GET_PLAY,
    async (id) =>{
        try {
            const data = await PlayService.getPlay(id);

            return {
                ...data,
                id: id
            };

        } catch (e) {
            console.log(e);
        }
    }
);
export const editPlay = createAsyncThunk(
    EDIT_PLAY,
    async (data, {dispatch}) =>{
        try {
            await PlayService.editPlay(data.id, data);
            await  dispatch(getPlays());

        } catch (e) {
            console.log(e);
        }
    }
);

export const deletePlay = createAsyncThunk(
    DELETE_PLAY,
    async (id, {dispatch}) =>{
        try {
            await PlayService.deletePlay(id);
            await  dispatch(getPlays());

        } catch (e) {
            console.log(e);
        }
    }
);



