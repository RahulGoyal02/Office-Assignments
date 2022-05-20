import { useDispatch, useSelector } from "react-redux";
import {
  incCount,
  decCount,
  resetCount,
  fetchDataReq,
  HighToLow,
} from "../store/action";

const Counter = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  console.log(store);

  function sorting(e) {
    if (e.target.value === "HL") {
      const high = store.data.map((el) => el).sort((a, b) => b.price - a.price);
      dispatch({type:"SORTING_HL", payload: high});
    }else if(e.target.value === "LH"){
      const low = store.data.map((el) => el).sort((a, b) => a.price - b.price);
      dispatch(HighToLow(low));
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>{store.counter}</h1>
      <button onClick={() => dispatch(incCount(10))}>Increment</button>
      <button onClick={() => dispatch(decCount(1))}>Decrement</button>
      <button onClick={() => dispatch(resetCount(0))}>Reset</button>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "FETCH_API" });
            dispatch(fetchDataReq());
          }}
          disabled={store.data.length > 0}
        >
          Fetch
        </button>
        <select onChange={(e) => sorting(e)} disabled={store.data.length <= 0}>
          <option value=""></option>
          <option value="LH">Low to High</option>
          <option value="HL">High to Low</option>
        </select>
      </div>
      {store.loading ? <h1>Loading</h1> : ""}
      { store.data.map((el, i) => (
        <div key={i}>
          <span>{el.title}</span> <b>${el.price}</b>
        </div>
      ))}
    </>
  );
};

export default Counter;
