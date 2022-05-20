import {
  FETCH_DATA,
  ADD_EMPLOYEE_DATA,
  DELETE_EMPLOYEE_DATA,
  RESET_ALL_DATA,
  EDIT_EMPLOYEE,
  CHUNKS_DATA,
} from "./actionType";

export const chunks = (payload) => {
  // console.log("ChucksAction", payload);
  return {
    type: CHUNKS_DATA,
    payload,
  };
};

export const fechdata = (payload) => {
  // console.log("action",data)
  return {
    type: FETCH_DATA,
    payload,
  };
};

export const addemployeedata = (payload) => {
  // console.log("action",payload)
  return {
    type: ADD_EMPLOYEE_DATA,
    payload,
  };
};

export const deleteemployee = (payload) => {
  // console.log("action",payload)
  return {
    type: DELETE_EMPLOYEE_DATA,
    payload,
  };
};

export const editEmployee = (payload) => {
  // console.log("edit",payload)
  return {
    type: EDIT_EMPLOYEE,
    payload,
  };
};

export const reset = () => {
  // console.log("action")
  return {
    type: RESET_ALL_DATA,
  };
};
