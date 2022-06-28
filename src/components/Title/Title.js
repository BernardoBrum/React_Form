import React from "react";
import { TitleStyled } from "./Title.styled";

const Title = ({ text }) => {
  return (
    <div>
      <TitleStyled>{text}</TitleStyled>
    </div>
  );
};

export default Title;
