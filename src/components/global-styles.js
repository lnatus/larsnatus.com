import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000;
    color: #FFF;
  }

  *{
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu;
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
    font-size: 64px;
    font-weight: bolder;
    display: inline-block;
    margin: 30px 0 0 0;
  }

  h2 {
    font-weight: 300;
    margin: 0;
  }

  h4 {
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