import { useReducer } from "react";
import todoContext from "./context";
import reducer, { initialState } from "./reducer";
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};
export default TodoProvider;
