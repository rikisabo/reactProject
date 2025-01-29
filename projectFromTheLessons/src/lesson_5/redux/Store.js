import {createStore} from 'redux';
import { TasksReducer } from './Reducers/TasksReducer';
import { applyMiddleware } from 'redux';
import validatorMidlleware from './midllewares/validatorMidlleware';

export const Store=createStore(TasksReducer,applyMiddleware(validatorMidlleware));
export default Store;
