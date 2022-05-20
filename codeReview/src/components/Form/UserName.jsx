import { Form, Field, FormSpy } from "react-final-form";
// import { useState } from "react";


const required = (value) => (value ? undefined : "Required");
 


function UserName() {
  return (
    <>
      <div >
        {/* <label>First Name</label> */}
        <Field
          name="first_name"
          component="input"
          placeholder="First Name"
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
              <label>First Name</label>
              <input {...input} placeholder={placeholder} />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
      </div>

      <div>
        <Field
          name="last_name"
          component="input"
          placeholder="Last Name"
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
              <label>Last Name</label>
              <input {...input} placeholder={placeholder} />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
      </div>
    </>
  );
}

export default UserName;