import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

//redusers
import userReducer from './user/user.reducer';
import playReducer from './play/play.reducer';
import bookReducer from './book/book.reducer';


const rootReducer = combineReducers({
    user: userReducer,
    play: playReducer,
    book: bookReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));