import styled from "styled-components";

const FormStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  width: 60vw;
  height: 80vh;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }

  img {
    margin-top: 15%;
  }

  button {
    width: 90px;
    height: 40px;
    font-size: 16px;
  }

  .container1 {
    width: 80%;
    margin-top: 1%;

    @media (max-width: 768px) {
      input {
        width: 92%;
      }
    }
  }

  .container2 {
    display: flex;
    width: 80%;
    margin-top: 1%;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .container3 {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 8%;
    margin-right: 1%;

    @media (max-width: 768px) {
      flex-direction: column;

      button {
        width: 100%;
        height: 80px;
      }
    }
  }

  .sub-container1 {
    display: flex;
    flex-direction: column;
    width: 70%;

    @media (max-width: 768px) {
      width: 100%;

      input {
        width: 92%;
      }
    }
  }

  .sub-container2 {
    display: flex;
    flex-direction: column;
    width: 28%;

    @media (max-width: 768px) {
      flex-direction: row;
      width: 92%;
      justify-content: space-between;
    }
  }

  .container-media {
    @media (max-width: 768px) {
      width: 45%;
    }
  }
`;

export { FormStyled };
