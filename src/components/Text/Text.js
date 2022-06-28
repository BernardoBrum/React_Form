import React from "react";
import { TextStyled } from "./Text.styled";

const Text = ({ text }) => {
  return (
    <div>
      <TextStyled>{text}</TextStyled>
    </div>
  );
};

export default Text;
