import {createAsyncThunk} from "@reduxjs/toolkit";
import {CREATE_BOOK, EDIT_BOOK, GET_ADMIN_BOOK, GET_USER_BOOK} from "./book.actionType";

//service
import BookService from "../../Service/BookService";

//helpers
import objectToArray from "../../helpers/objectToArray";

export const createBook = createAsyncThunk(
    CREATE_BOOK,
    async (data, {dispatch}) => {
        try {
            const response = await BookService.creteBook({
                ...data,
                status: 'Pending'
            });
            dispatch(getUserBook())
        } catch (e) {
            console.log(e)
        }
    }
);
export const getUserBook = createAsyncThunk(
    GET_USER_BOOK,
    async (data, {dispatch}) => {
        try {
            const data = await BookService.getUserBook();

            return data ? objectToArray.objectToArray(data) : data;

        } catch (e) {
            console.log(e);
        }
    }
);
export const getAdminBook = createAsyncThunk(
    GET_ADMIN_BOOK,
    async (data, {dispatch}) => {
        try {
            const data = await BookService.getAdminBook();

            return objectToArray.objectToArrayTwoLayers(data);

        } catch (e) {
            console.log(e);
        }
    }
);
export const editBook = createAsyncThunk(
    EDIT_BOOK,
    async (data,{dispatch}) => {
        try {
            await BookService.editBook(data.userId, data.bookId, data);
            await  dispatch(getAdminBook());

        } catch (e) {
            console.log(e);
        }
    }
);
