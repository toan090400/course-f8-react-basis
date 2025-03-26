import { SET, ADD, DELETE } from "./constants";
export const setJob = (value) => {
  return {
    type: SET,
    input: value,
  };
};
export const addJob = (value) => {
  return {
    type: ADD,
    value,
  };
};
export const deleteJob = (value) => {
  return {
    type: DELETE,
    value,
  };
};
