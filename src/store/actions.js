import {ADD_TODO, DELETE_TODO, SET_IS_DONE} from "./actionTypes";

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload })
export const deleteTodoAction = (payload) => ({ type: DELETE_TODO, payload })
export const setIsDoneAction = (payload) => ({ type: SET_IS_DONE, payload })