import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000;
    color: #FFF;
  }

  *{
    font-family: "Open Sans";
    font-size: 20px;
  }

  *::-moz-selection { 
    color: #000;
    background: #EAD019;
  }
  
  *::selection {
    color: #000;
    background: #EAD019;
  }

  a {
    color: #EAD019;
    text-decoration: underline;
  }

  h1 {
    font-family: "Amiri";
    font-size: 54px;
    display: inline-block;
    background: #EAD019;
    padding: 0 24px;
    color: #000;
  }

  h4 {
    font-family: "Amiri";
    display: inline-block;
    font-size: 38px;
  }

  small, 
  small a {
      font-size: 12px;
  }

  img {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`;
 
export default GlobalStyle;