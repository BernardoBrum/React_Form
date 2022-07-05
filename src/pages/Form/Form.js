import React from "react";
import { FormStyled } from "./Form.styled";
import Main from "../../assets/main.png";
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import Error from "../../components/Error/Error";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const [nameError, setNameError] = useState("hidden");
  const [emailError, setEmailError] = useState("hidden");
  const [passwordError, setPasswordError] = useState("hidden");
  const [phoneError, setPhoneError] = useState("hidden");
  const [ageError, setAgeError] = useState("hidden");
  const [checkError, setCheckError] = useState("hidden");

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();
  const [check, setCheck] = useState();

  const push = useNavigate();

  const date = new Date();
  const year = date.getFullYear();

  const validate = () => {
    if (!name && !email && !password && !phone && !age && !check === true) {
      setNameError("visible");
      setEmailError("visible");
      setPasswordError("visible");
      setPhoneError("visible");
      setAgeError("visible");
      setCheckError("visible");
    } else {
      if (
        name.includes(" ") &&
        name.length > 4 &&
        /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/.test(email) &&
        /^[0-9]{6,8}$/.test(password) &&
        /^[0-9]{11}$/.test(phone) &&
        parseInt(age.slice(0, 4)) > year - 121 &&
        check === true
      ) {
        push("/success");
      } else {
        if (name.includes(" ") && name.length > 4) {
          setNameError("hidden");
        } else {
          setNameError("visible");
        }
        if (/^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/.test(email)) {
          setEmailError("hidden");
        } else {
          setEmailError("visible");
        }
        if (/^[0-9]{6,8}$/.test(password)) {
          setPasswordError("hidden");
        } else {
          setPasswordError("visible");
        }
        if (/^[0-9]{11}$/.test(phone)) {
          setPhoneError("hidden");
        } else {
          setPhoneError("visible");
        }
        if (age) {
          if (parseInt(age.slice(0, 4)) > year - 121) {
            setAgeError("hidden");
          } else {
            setAgeError("visible");
          }
        } else {
          setAgeError("visible");
        }
        if (check === true) {
          setCheckError("hidden");
        } else {
          setCheckError("visible");
        }
      }
    }
  };

  return (
    <FormStyled display="flex">
      <div>
        <img src={Main} alt="" />
      </div>
      <Title text="Intern Sign Up" />
      <div className="container1">
        <Text text="Full Name *" />
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
        />
        <Error visibility={nameError} text="Fullname Invalid" />
      </div>
      <div className="container2">
        <div className="sub-container1">
          <Text text="Email *" />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="foo@bar.com"
            type="email"
          />
          <Error visibility={emailError} text="Email Invalid" />
          <Text text="Password *" />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Error visibility={passwordError} text="Password Invalid" />
        </div>
        <div className="sub-container2">
          <div className="container-media">
            <Text text="Phone" />
            <Input
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(83) 00000-0000"
              type="tel"
            />
            <Error visibility={phoneError} text="Phone Invalid" />
          </div>
          <div className="container-media">
            <Text text="Birthday *" />
            <Input
              required="true"
              onChange={(e) => setAge(e.target.value)}
              type="date"
            />
            <Error visibility={ageError} text="Age Invalid" />
          </div>
        </div>
      </div>
      <div className="container3">
        <div>
          <Checkbox
            onChange={(e) => setCheck(e.target.checked)}
            type="checkbox"
            text="I accept the terms and privacy"
          />
          <Error visibility={checkError} text="You must accept the terms" />
        </div>
        <Button onClick={validate} width="90px" height="40px" text="Register" />
      </div>
    </FormStyled>
  );
};

export default Form;
