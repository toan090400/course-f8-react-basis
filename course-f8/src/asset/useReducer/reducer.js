import { SET, ADD, DELETE } from "./constants";
export const initialState = {
  input: "",
  list: [],
};
const reducer = (state, action) => {
  let stateNew = {};
  switch (action.type) {
    case SET:
      stateNew = {
        ...state,
        input: action.input,
      };
      break;
    case ADD:
      stateNew = {
        ...state,
        list: [...state.list, action.value],
      };
      break;
    case DELETE:
      const newNumbers = state.list.filter((arr) => arr !== action.value);
      stateNew = {
        ...state,
        list: newNumbers,
      };
      break;
    default:
      throw new Error("Error!!!");
  }
  return stateNew;
};
export default reducer;
