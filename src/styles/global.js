import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Audiowide', cursive;
  }

  html, body, #root {
    min-height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
