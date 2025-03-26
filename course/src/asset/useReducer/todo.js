import React, { useReducer, useRef } from "react";
import TodoList from "../../components/useReducer/todo";
import { setJob, addJob, deleteJob } from "./actions";
import reducer, { initialState } from "./reducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // khởi tạo vị trí thiết lập useRef
  const inputRef = useRef();
  const handlerAddJob = (value) => {
    dispatch(addJob(value));
    dispatch(setJob(""));
    // sau khi submit thì con trỏ chuột sẽ đặt lại tại vị ví thiết lập
    inputRef.current.focus();
  };
  const handlerDeleteJob = (value) => {
    dispatch(deleteJob(value));
  };
  return (
    <TodoList
      state={state}
      setJob={setJob}
      handlerAddJob={handlerAddJob}
      inputRef={inputRef}
      handlerDeleteJob={handlerDeleteJob}
      dispatch={dispatch}
    />
  );
};
export default Todo;
