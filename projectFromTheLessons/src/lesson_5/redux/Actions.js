import { ADD_TASK,DELETE_FROM_RECYCLE_BIN,DELETE_FROM_THE_TASKS,RECONSTRUCTION_TASK } from "./ActionsTypes";
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});
export const deleteFromRecycleBin = (task) => ({
    type: DELETE_FROM_RECYCLE_BIN,
    payload: task,
});
export const deleteFromTheTasks = (task) => ({
    type: DELETE_FROM_THE_TASKS,
    payload: task,
});
export const reconstructionTask = (task) => ({
    type: RECONSTRUCTION_TASK,
    payload: task,
});