import { Form, Field, FormSpy } from "react-final-form";
// import { useState } from "react";




const required = (value) => (value ? undefined : "Required");
const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
const minValue = (min) => (value) =>
  isNaN(value) || !value.startsWith("0") && value.length == min ? undefined : `Not Valid`;
const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

function Phone() {
  return (
    <div>
      <Field
        name="phone"
        type="input"
        component="input"
        placeholder="Enter Mobile Number"
        validate={composeValidators(required, mustBeNumber, minValue(10))}
        subscription={{
          value: true,
          active: true,
          error: true,
          touched: true,
        }}
      >
        {({ input, meta, placeholder }) => (
          <div>
            <label>Mobile Number</label>
            <input {...input} placeholder={placeholder} maxLength={"10"} />
         
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
  );
}
export default Phone;
