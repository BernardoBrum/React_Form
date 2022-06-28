import React from "react";
import { InputStyled } from "./Input.styled";

export const Input = (props) => {
  return (
    <div>
      <InputStyled width={props.width} type={props.type} />
    </div>
  );
};


