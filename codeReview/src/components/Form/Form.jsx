import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addemployeedata } from "../../store/action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import editForm from "./Edit";
import { useState } from "react";
import { editEmployee } from "../../store/action";

import Navbar from "../Navbar";
import UserName from "./UserName";
import Email from "./Email";
import Designation from "./Designation";
import Phone from "./Phone";
import Address from "./Address";
import DOB from "./DOB";
import stateWiseCities from "../utils/CityData";

import { compose, withReducer, withHandlers, withState, lifecycle } from "recompose";


const required = (value) => (value ? undefined : "Required");

const setCity = (args, state, utils) => {
  // console.log(state);
  utils.changeValue(state, "cityDropDown", () => args[0]);
  // console.log(state.cityDropDown);
};

function MyForm( {selected,handleAddUser } ) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.emp);

  const { id } = useParams();



// -----------lifecycle--------------//

  useEffect(() => {
    
    handleAddUser(store,id)
  }, [store, id]);



  const navigate = useNavigate();

  const onSubmit = (value) => {

  const { first_name, last_name, email, designation, DOB, address, phone, sex,id } = value;
  let payload = {first_name,last_name,email,DOB,designation,address,phone,sex,id};

    if (id) {
      dispatch(editEmployee(payload))
      navigate("/");
    }else{
    payload.id = store.length + 1 
 
    dispatch(addemployeedata(payload));
   
    navigate("/");
    }

  };

 

  return (
    <>
      <Navbar />
      <h1 className="App">Employee Page</h1>

      <Form
        onSubmit={onSubmit}
        mutators={{ setCity }}
        initialValues={{
          cityDropDown: [],
          ...selected,
        }}
      >
        {({ handleSubmit, form, values, submitting, valid  }) => (
          <form onSubmit={handleSubmit}>
            <UserName /> 
            <Email  />
            <Designation />
            <Phone />
            <DOB />

            {/* ------------Employee Checker-------------- */}
            <div>
              <label>Employee</label>

              <Field name="Employee Check" component="input" type="checkbox" />
            </div>

            {/* ----------------Gender Checker------------------ */}
            <div>
              <div>
                <label>Sex</label>
                <label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="Male"
                    initialValue={"Rahul"}
                  />
                  Male
                </label>
                <label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="Female"
                  />{" "}
                  Female
                </label>
                <label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="Transgender"
                  />{" "}
                  Transgender
                </label>
              </div>
            </div>

            <Address />

            <div>
              <label>state:</label>
              <Field name="state" component="select" validate={required}>
                {({ input: { onChange, value } }) => (
                  <select
                    name="state"
                    value={value}
                    onChange={(data) => {
                      console.log(data);
                      onChange(data.target.value);
                      form.mutators.setCity(stateWiseCities[data.target.value]);
                    }}
                  >
                    <option value={null}></option>
                    {Object.keys(stateWiseCities).map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
            </div>
            <div>
              <label>city:</label>
              <Field name="city" component={"select"} validate={required}>
                <option value={null}></option>
                {values.cityDropDown.map((e) => (
                  <option key={e.city} value={e.city}>
                    {e.city}
                  </option>
                ))}
              </Field>
            </div>
            <button type="submit"  disabled={!valid}>
              Submit
            </button>
            {/* <pre className="App-header">
              {JSON.stringify(values, undefined, 2)}
            </pre> */}
          </form>
        )}
      </Form>
    </>
  );
}



const enhance = compose(
  withState('selected', 'setSelected', null),
  withHandlers({
    handleAddUser: ({setSelected}) => (store,id) => setSelected(store.find((emp) => emp.id === Number(id))),
    
  }),
  lifecycle({
    componentDidMount() {
     
    }
  })
);


export default enhance(MyForm);
