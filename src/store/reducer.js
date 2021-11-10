import { SET_NEW_TODO } from "./actionTypes";

const initialState = [
  { text: 'first TODO', id: 0 }
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_TODO:
      return [...state];
    default:
      return state;
  }
}