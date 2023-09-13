import styled from "styled-components";

export const InputComponent = styled.input`
  font-size: 16px;
  font-family: sans-serif;
  width: 30rem;
  height: 28px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin: 5px;
`;
export const LabelComponent = styled.label`
  font-size: medium;
  color: ${({ theme }) => theme.colors.$white};
  padding: 2px 10px;
`;
