import { Text } from "../../components/Text/Text";
import { Input } from "../../components/Input/Input";
import { Title } from "../../components/Title/Title";
import { FormStyled } from "./Form.styled";
import Main from "../../assets/main.png";
import React from "react";

const Form = () => {
  return (
    <FormStyled>
      <div>
        <img src={Main} alt="" />
      </div>
      <Title text="Intern Sign Up" />
      <div class="container1">
        <Text text="Full Name *" />
        <Input width="100%" type="text" />
      </div>
      <div class="container2">
        <div class="sub-container1">
          <Text text="Email *" />
          <Input width="90%" type="email" />
        </div>
        <div class="sub-container2">
          <Text text="Phone" />
          <Input width="100%" type="tel" />
        </div>
      </div>
      <div class="container2">
        <div class="sub-container1">
          <Text text="Password *" />
          <Input width="90%" type="password" />
        </div>
        <div class="sub-container2">
          <Text text="Birthday *" />
          <Input width="100%" type="date" />
        </div>
      </div>
    </FormStyled>
  );
};

export default Form;