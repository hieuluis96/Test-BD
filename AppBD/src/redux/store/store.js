import { createStore, combineReducers, applyMiddleware } from 'redux';
import auth from '../auth/reducer';
import banggia from '../banggia/reducer';
import lichthue from '../lichthue/reducer';
import vitri from '../vitri/reducer';
import danhsachsan from '../danhsachsan/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    auth,
    banggia,
    lichthue,
    vitri,
    danhsachsan
});

const store = createStore(reducer, applyMiddleware(thunk));


export default store;