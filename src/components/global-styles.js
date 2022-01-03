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
    background: #11A8DB;
  }
  
  *::selection {
    color: #000;
    background: #11A8DB;
  }

  a {
    color: #FFF;
  }

  h1 {
    font-family: "Amiri";
    font-size: 54px;
    display: inline-block;
    background-image: linear-gradient(-45deg, #11DBB4 0%, #11A8DB 35%, #612CB8 100%);
    padding: 0 24px;
  }

  h4 {
    font-family: "Amiri";
    display: inline-block;
    font-size: 38px;
  }

  h5 {
    margin: 0 0 20px 0;
    font-size: 24px;
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