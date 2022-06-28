import React from "react";
import { TextStyled } from "./Text.styled";

export const Text = ({text}) => {
  return (
    <div>
      <TextStyled>{text}</TextStyled>
    </div>
  );
};
