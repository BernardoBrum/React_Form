import styled from "styled-components";
const SucessStyled = styled.section`
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  width: 60vw;
  height: 80vh;

  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;

    @media (max-width: 768px) {
      height: 35%;
      margin-top: 40%;
    }
  }

  .sub-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15%;
  }

  img {
    margin: 15% 0;
  }

  button {
    height: 180px;
    width: 270px;
    font-weight: 400;
    font-size: 36px;

    @media (max-width: 768px) {
      height: 80px;
    }
  }
`;

export { SucessStyled };
