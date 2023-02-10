import {createReducer} from '@reduxjs/toolkit';
import {getPlay, getPlays} from './play.action';

const initialState = {
    plays: [],
    entryPlay: {
        name: '',
        date: '',
        price: '',
        time: '',
    },
};

const playReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(getPlays.fulfilled, (state, action) => {
                state.plays = action.payload;
            })
            .addCase(getPlay.fulfilled, (state, action) => {
                state.entryPlay = action.payload;
            })
    });
export default playReducer;