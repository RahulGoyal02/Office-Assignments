/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { render } from "react-dom";
// import Styles from './Styles'
import { Form, Field } from "react-final-form";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const MyForm = () => {
  const onSubmit = async (values) => {
    console.log(values)
   
      dispatch({type: "CREATE_POST", payload: {...values, id: store.length + 1} })
    navigate(-1);
    //   return values;
    //   await sleep(300)
    //   window.alert(JSON.stringify(values, 0, 2))
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector(state => state.data)
  console.log(store)


  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={""}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label style={{ color: "white", fontSize: "22px" }}>Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Title"
              />
            </div>
            <div>
              <label style={{ color: "white", fontSize: "22px" }}>Post</label>
              <Field
                name="body"
                component="input"
                type="text"
                placeholder="Post"
              />
            </div>

            <div className="buttons">
              <button
                // onClick={() => navigate("/")}
                type="submit"
                disabled={submitting || pristine}
              >
                Submit
              </button>
            </div>
            <pre style={{ color: "white", fontSize: "22px" }}>
              {JSON.stringify(values, 0, 2)}
            </pre>
          </form>
        )}
      />
    </>
  );
};


export default MyForm;
