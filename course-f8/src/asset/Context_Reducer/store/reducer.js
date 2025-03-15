import { SET, ADD, DELETE } from "./constants";
const initialState = {
  input: "",
  list: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        input: action.value,
      };
    case ADD:
      return {
        ...state,
        list: [...state.list, action.value],
      };
    case DELETE:
      const newNumbers = state.list.filter((arr) => arr !== action.value);
      return {
        ...state,
        list: newNumbers,
      };
    default:
      throw new Error("Error!!!");
  }
};
export { initialState };
export default reducer;
