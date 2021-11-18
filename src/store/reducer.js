import {ADD_TODO, DELETE_TODO, SET_IS_DONE} from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  { text: 'first TODO', id: uuidv4(), isDone: false }
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.payload.text, id: action.payload.id, isDone: action.payload.isDone}];

    case DELETE_TODO:
      state.splice(action.payload.index,1);
      return [...state];

    case SET_IS_DONE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, isDone: !item.isDone};
        }
        return item;
      })
    default:
      return state;
  }
}