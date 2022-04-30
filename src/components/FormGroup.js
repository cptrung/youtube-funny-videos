import React from "react";

export const FormGroup = (props) => {
  const { label = "Label", children } = props || {};
  return (
    <fieldset>
      <legend>{label}</legend>
      <>{children}</>
    </fieldset>
  );
};
