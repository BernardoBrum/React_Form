import styled from "styled-components";
const SucessStyled = styled.section`
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  width: 60vw;
  height: 80vh;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
  }

  .sub-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;
  }

  img {
    margin: 15% 0;
  }

  button {
    height: 180px;
    width: 270px;
    font-weight: 400;
    font-size: 36px;
  }
`;

export { SucessStyled };
