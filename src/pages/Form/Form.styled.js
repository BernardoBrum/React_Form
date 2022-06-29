import styled from "styled-components";

const FormStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  width: 60vw;
  height: 80vh;

  img {
    margin-top: 15%;
  }

  .container1 {
    width: 80%;
    margin-top: 2%;
  }

  .container2 {
    display: flex;
    width: 80%;
    margin-top: 2%;
  }

  .container3 {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 10%;
    margin-right: 1%;
  }

  .sub-container1 {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .sub-container2 {
    display: flex;
    flex-direction: column;
    width: 28%;
  }

  @media (max-width: 768px) {
    img {
      height: 15vh;
    }
  }
`;

export { FormStyled };
