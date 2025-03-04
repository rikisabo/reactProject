import { ADD_TASK, ADD_TASK_TO_THE_RECYCLE_BIN, DELETE_FROM_RECYCLE_BIN, DELETE_FROM_THE_TASKS, RECONSTRUCTION_TASK } from "../ActionsTypes";

export const initialState = {
    theTasksInTheRecycleBin: [],
};
export const RecycleBinReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_TO_THE_RECYCLE_BIN:
            console.log(state);
            return { ...state, theTasksInTheRecycleBin: state.theTasksInTheRecycleBin.concat(action.payload) };
        case DELETE_FROM_RECYCLE_BIN:
            return {
                ...state, 
                theTasksInTheRecycleBin: state.theTasksInTheRecycleBin.filter(task => task.Name !== action.payload.Name)
            };
        case RECONSTRUCTION_TASK:
            return {  ...state, 
                theTasksInTheRecycleBin: state.theTasksInTheRecycleBin.filter(task => task.Name !== action.payload.Name) }; // Modify as per your requirements
        default:
            return state;
    }
};