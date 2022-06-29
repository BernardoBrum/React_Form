import React from "react";
import { InputStyled } from "./Input.styled";

const Input = ({width, type, placeholder}) => {
  return (
    <div>
      <InputStyled autoComplete="none" width={width} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
