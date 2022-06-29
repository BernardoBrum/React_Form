import React from "react";
import { SucessStyled } from "./Sucess.styled";
import Main from "../../assets/main.png";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const Sucess = ({ display }) => {
  return (
    <SucessStyled display="none">
      <div class="container">
        <div class="sub-container">
          <img src={Main} alt="" />
        <Title text="Sucess!" />
        </div>
        <Button width="220px" height="150px" text="Go Back!" />
      </div>
    </SucessStyled>
  );
};

export default Sucess;
