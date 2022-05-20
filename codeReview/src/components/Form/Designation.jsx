import { Form, Field, FormSpy } from "react-final-form";
// import { useState } from "react";

const required = (value) => (value ? undefined : "Required");

function Designation() {
  return (
    <div>
      <Field
        name="designation"
        type="text"
        component="input"
        placeholder="Enter Designation"
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
            <label>Designation</label>
            <input {...input} placeholder={placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
  );
}



export default Designation;