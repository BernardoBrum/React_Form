import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
    </div>
  );
};

export default Button;
