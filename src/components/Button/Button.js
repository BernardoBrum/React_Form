import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ text }) => {
  return (
    <div>
      <ButtonStyled>{text}</ButtonStyled>
    </div>
  );
};

export default Button;
