import { Form, Field, FormSpy } from "react-final-form";
// import { useState } from "react";

const required = (value) => (value ? undefined : "Required");

function Email() {
  return (
    <div>
      <Field
        name="email"
        type="email"
        component="input"
        placeholder="Email"
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
            <label>Email</label>
            <input {...input} placeholder={placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
  );
}



export default Email;