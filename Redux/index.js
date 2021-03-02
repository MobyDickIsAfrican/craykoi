import {createStore} from 'redux';
import reducer from './Reducers/index.js';
/* BNnb */

const store = createStore(reducer);

export default store;