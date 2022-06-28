import styled from "styled-components";

const InputStyled = styled.input`
  width: ${(props) => props.width} ;
  font-size: 15px;
  color: #767676;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  outline: 0;
  height: 4vh;
`;

export { InputStyled};
