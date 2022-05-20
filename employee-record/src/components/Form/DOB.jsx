import { Form, Field, FormSpy } from "react-final-form";
// import { useState } from "react";
import { useParams } from "react-router-dom";

const required = (value) => (value ? undefined : "Required");



function DOB() {
  const { id } = useParams();
  // console.log(id);
  const disabledDOB = (id) => (id ? true : false);

  return (
    <>  
    <div>
      <Field
        name="DOB"
        type="date"
        component="input"
        placeholder="Date Of Birth"
       
        validate={required}
        subscription={{
          value: true,
          active: true,
          error: true,
          touched: true,
        }}
      >
        {({ input, meta, placeholder }) => (
          <div>
            <label>Date Of Birth</label>
            <input {...input} placeholder={placeholder}  disabled={disabledDOB(id)} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div> </>

 
  );
}
export default DOB;
