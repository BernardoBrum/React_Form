import React from "react";
import { InputStyled } from "./Input.styled";

const Input = ({ type, placeholder, onChange }) => {
  return (
    <div>
      <InputStyled
        onChange={onChange}
        autoComplete="none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
