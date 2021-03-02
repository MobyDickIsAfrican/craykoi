import {combineReducers} from 'redux';
import flatStateReducer from './flatStateReducer.js';
import adjustReducer from './adjustReducer.js';
import bufferReducer from './bufferReducer';
import clickedReducer from './clickedReducer.js';
import setShiftReducer  from './setShiftReducer.js';
import addPage from './UIReducer.js';

const pageReducer = combineReducers({
    byID: flatStateReducer,
    adjust: adjustReducer,
    BufferElement: bufferReducer,
    clickedID: clickedReducer,
    shift: setShiftReducer,
});

const reducer = combineReducers({
    ui: pageReducer,
    pages: addPage,
})
export default reducer;
