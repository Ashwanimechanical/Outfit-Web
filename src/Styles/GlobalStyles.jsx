import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #000; /* dark theme */
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
