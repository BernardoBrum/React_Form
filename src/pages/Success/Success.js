import React from "react";
import { SuccessStyled } from "./Success.styled";
import Main from "../../assets/main.png";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <SuccessStyled>
      <div className="container">
        <div className="sub-container">
          <img src={Main} alt="" />
          <Title text="Success!" />
        </div>
        <Link to="/">
          <Button text="Go Back!" />
        </Link>
      </div>
    </SuccessStyled>
  );
};

export default Success;
