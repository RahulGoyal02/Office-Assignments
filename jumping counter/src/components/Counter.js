import { connect } from "react-redux";
import {
  compose,
  withProps,
  withHandlers,
  withState,
  withReducer,
  lifecycle,
} from "recompose";
import { incCount, decCount, resetCount } from "../store/action";
import { INCREMENT_COUNT } from "../store/actionType";

const Counter = ({
  sachin,
  INCCOUNT,
  rahulg,
  rahul,
  show,
  alert,
  Greeting,
  toggleShow,
  incHandler,
  increment,
  decrement,
  reset,
  bgColour,
  TimeGreetings,resetHandler,
  DoubleState,apple, fruits
}) => {
  // console.log(count)

  return (
    <div style={{ backgroundColor: bgColour(sachin) }}>
      <h1>{Greeting()}</h1>

      <h3>{rahulg}</h3>
      <button onClick={() => increment(10)}>+</button>

      <h1>Counter</h1>
      <h1>{sachin}</h1>
      <h1>{alert}</h1>
      <button onClick={() => incHandler(10)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={toggleShow}>Show</button>
      <button onClick={DoubleState}>{apple} Double State {fruits}</button>
      {show ? <h3>{rahulg}</h3> : ""}
      <h2>{TimeGreetings()}</h2>
    </div>
  );
};

const enhance = compose(
  connect(
    (store) => ({
      rahulg: store.count,
      alert: store.alert,
    }),
    (dispatch) => ({
      increment: (payload) => dispatch(incCount(payload)),
      decrement: (payload) => dispatch(decCount(payload)),
      reset: (payload) => dispatch(resetCount(payload)),
    })
  ),

  withState("show", "setShow", false),
  withState("apple", "setApple", ""),
  withState("fruits", "setFruits", ""),

  withProps({
    Greeting: () => {
    return "Good Morning"
      
      // if(new Date().getMinutes() >= 19 ){
      //  return "Good Night"
      // }else if(new Date().getMinutes() <= 12 ){
      //   return "Good Morning"
      // }else{
      //   return "Good After-Noon"
      // }
    },

    TimeGreetings: () =>{
      if(new Date().getMinutes() >= 24 ){
       return "Good Night"
      }else if(new Date().getMinutes() <= 12 ){
        return "Good Morning"
      }else{
        return "Good After-Noon"
      }
    },

    bgColour: (count) => (count < 200 ? "grey" : "yellow"),
  }),
  withReducer(
    "sachin",
    "dispatchFunction",
    (sachin, { type, payload }) => {
      switch (type) {
        case "INCCOUNT":
          // console.log(payload);
          return sachin + payload;
        case "DECCOUNT":
          return sachin - payload;
        case "RESET":
          return payload;
        default:
          return sachin;
      }
    },
    0
  ),
  withHandlers({
    toggleShow:
      ({ setShow, show }) =>
      () =>
        setShow(!show),
    incHandler:
      ({ dispatchFunction }) => 
      (payload) =>
        dispatchFunction({ type: "INCCOUNT", payload }),

        resetHandler: ({reset}) => reset(),
        DoubleState: ({apple, setApple,fruits,setFruits}) => {

          if(apple && fruits){
            setApple("")
            setFruits("")  
          }else{
            setApple("Apple")
            setFruits("Fruits")
            
          }
          
        }
  }),

  lifecycle({
    componentDidMount() {
      this.props.bgColour();
    },

    // Value Before Updating //
    componentWillUpdate(prev) {
      console.log(prev)
      alert("Sachin",this.props.sachin, "Rahul",this.props.rahulg )
      this.props.Greeting()

      // alert(`Sachin ${this.props.sachin} Rahul ${this.props.rahulg}`);
    },
    componentDidUpdate() {
      // HOW TO GIVE dependency in lifecycle......... 
      // alert(`Updated Count ${this.props.rahulg} ${this.props.sachin}`);
    },
  }),

);

export default enhance(Counter);
