import { Form, Field, FormSpy } from "react-final-form";
// import { useState } from "react";

const required = (value) => (value ? undefined : "Required");

function Address() {
  return (
    <div>
      <Field
        name="address"
        component="input"
        placeholder="Enter Address"
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
            <label>Address</label>
            <input {...input} placeholder={placeholder} />

           
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
  );
}

export default Address;
