import {createStore} from 'redux'; // store bnany k lye
import myReducer from './reducer';
let store = createStore(myReducer)

export default store;