import React from "react";
import { CheckboxStyled } from "./Checkbox.styled";

const Checkbox = ({ type, text, id, onChange }) => {
  return (
    <div>
      <CheckboxStyled id={id} type={type} onChange={onChange} />
      {text}
    </div>
  );
};

export default Checkbox;
