import addCard_reducer from './addCard_reducer';
import {combineReducers, createStore} from "redux";

let reducers = combineReducers(
    {
        addCard_reducer: addCard_reducer,
    }
);

let store = createStore(reducers);

export default store;