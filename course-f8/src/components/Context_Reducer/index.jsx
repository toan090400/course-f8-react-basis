import { useContext, useRef } from "react";
import todoContext from "../../asset/Context_Reducer/store/context";
import {
  addJob,
  deleteJob,
  setJob,
} from "../../asset/Context_Reducer/store/action";

const TodoAPP = () => {
  const { state, dispatch } = useContext(todoContext);
  const inputRef = useRef();
  const handlerSubmit = (value) => {
    dispatch(addJob(value));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h3>useReducer and useContext</h3>
      <input
        type="text"
        ref={inputRef}
        value={state.input}
        onChange={(e) => dispatch(setJob(e.target.value))}
        placeholder="Enter ...."
      />
      <button type="button" onClick={() => handlerSubmit(state.input)}>
        Submit
      </button>
      <ul>
        {state.list.map((item, index) => (
          <li onClick={() => dispatch(deleteJob(item))} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoAPP;
