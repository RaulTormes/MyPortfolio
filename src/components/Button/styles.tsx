import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 15em;
  height: 3em;
  font-size: large;
  margin: 17px 5px;
  padding: 10px 10px;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$primary};
  border: none;
  border-radius: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.$hover};
    cursor: pointer;
  }
`;