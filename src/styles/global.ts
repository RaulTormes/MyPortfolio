import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
