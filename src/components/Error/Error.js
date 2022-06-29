import React from "react";
import { ErrorStyled } from "./Error.styled";

const Error = ({ text, visibility }) => {
  return (
    <div>
      <ErrorStyled visibility={visibility}>{text}</ErrorStyled>
    </div>
  );
};

export default Error;
