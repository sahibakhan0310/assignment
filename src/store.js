import {createStore} from 'redux';
import loadingReducer from './reducers/loadingReducer';
const store = createStore(loadingReducer)

export default store;