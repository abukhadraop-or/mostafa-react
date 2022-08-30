import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, #root {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    }

    * {
    box-sizing: border-box;
    }

`;

export default GlobalStyle;
