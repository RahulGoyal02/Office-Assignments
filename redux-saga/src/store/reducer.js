import {
  FETCH_DATA_REQ,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
  FETCH_DATA,
  HIGH_TO_LOW
} from "./actionTypes";

const init = {
  counter: 0,
  data: [],
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNT:
      return { ...state, counter: state.counter + payload };

    case DECREMENT_COUNT:
      return { ...state, counter: state.counter - payload };

    case RESET_COUNT:
      return { ...state, counter: 0 };

    case FETCH_DATA:
      console.log("payload", payload);
      return { ...state, data: [...payload], loading: false };

    case FETCH_DATA_REQ:
      console.log("state", state);
      return { ...state, loading: true };

    case HIGH_TO_LOW:
      console.log("state", state);
      return { ...state, data: [...payload], loading: false};

    default:
      return { ...state };
  }
};
export default reducer;
