import styled from "styled-components";
import { theme } from "~/styles/defaultTheme";

export const ButtonComponent = styled.button`
  width: 15em;
  height: 3em;
  font-size: large;
  margin: 1em;
  padding: 10px 10px;
  color: white;
  background-color: ${theme.colors.$primary};
  border: none;
  border-radius: 15px;

  &:hover {
    background-color: #436d47;
    cursor: pointer;
  }
`;
