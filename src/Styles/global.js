import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root {
   height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
  font-size: 14px;
  font-family: 'Roboto', Helvetica, sans-serif;
  }

  button {
  cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
// O termo #root eu peguei lá do arquivo index.html da pasta public.
