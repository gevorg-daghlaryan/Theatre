import {createReducer} from '@reduxjs/toolkit';

//actions
import {getAdminBook, getUserBook} from './book.action';


const initialState = {
    books: [],
};
const bookReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(getUserBook.fulfilled, (state, action) => {
                state.books = action.payload;
            })
            .addCase(getAdminBook.fulfilled, (state, action) => {
                state.books = action.payload;
            })
    });
export default bookReducer;
