import React from "react";
import { compose, withReducer, withHandlers } from "recompose";

const Counter = ({ Count, handleIncrement, handleDecrement, handleReset }) => {
    return (
        <div>
            <h2>{Count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

const enhance = compose(
    withReducer(
        "Count",
        "dispatch",
        (Count, action) => {
            switch (action.type) {
                case "Increment":
                    return Count + 1;
                case "Decrement":
                    return Count - 1;
                case "Reset":
                    return 0;
                default:
                    return Count;
            }
        },
        0
    ),
    withHandlers({
        handleIncrement: ({ dispatch }) => (event) => {
            dispatch({ type: "Increment" });
        },
        handleDecrement: ({ dispatch }) => (event) => {
            dispatch({ type: "Decrement" });
        },
        handleReset: ({ dispatch }) => (event) => {
            dispatch({ type: "Reset" });
        },
    })
);

export default enhance(Counter);
// export default Counter;