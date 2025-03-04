import { ADD_TASK, DELETE_FROM_RECYCLE_BIN, DELETE_FROM_THE_TASKS, RECONSTRUCTION_TASK,ADD_TASK_TO_THE_RECYCLE_BIN } from "../ActionsTypes";

export const initialState = {
    theTasks: [],
};

export const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, theTasks: state.theTasks.concat(action.payload) };
        case DELETE_FROM_RECYCLE_BIN:
            return {
                ...state, 
                theTasks: state.theTasks.filter(task => task.Name !== action.payload.Name)
            };
        case ADD_TASK_TO_THE_RECYCLE_BIN:
            return { 
                ...state, 
                theTasks: state.theTasks.filter(task => task.Name !== action.payload.Name) ,
                //add to the recycle bin!!

             }; // Modify as per your requirement
        case RECONSTRUCTION_TASK:
            return { ...state, 
                theTasks: state.theTasks.concat(action.payload) // Add the task back to tasks 
            }; // Modify as per your requirements
        default:
            return state;
    }
};