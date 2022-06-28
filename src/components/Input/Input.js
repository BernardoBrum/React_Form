import React from "react";
import { InputStyled } from "./Input.styled";

const Input = (props) => {
  return (
    <div>
      <InputStyled autoComplete="none" width={props.width} type={props.type} />
    </div>
  );
};

export default Input;
