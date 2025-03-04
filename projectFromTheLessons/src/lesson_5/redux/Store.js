import {createStore,combineReducers} from 'redux';
import { TasksReducer } from './Reducers/TasksReducer';
import { applyMiddleware } from 'redux';
import validatorMidlleware from './midllewares/validatorMidlleware';
import { RecycleBinReducer } from './Reducers/RecycleBinReducer';

const rootReducer=combineReducers({
    tasks:TasksReducer,
    recycleBin:RecycleBinReducer
})
export const Store=createStore(rootReducer,applyMiddleware(validatorMidlleware));
export default rootReducer;
