import React from "react";
import { CheckboxStyled } from "./Checkbox.styled";

const Checkbox = ({ type, text }) => {
  return (
    <div>
      <CheckboxStyled type={type} />{text}
    </div>
  );
};

export default Checkbox;
