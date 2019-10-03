import React from 'react';

import GlobalStyle from './styles/global';
import Calculator from './components/Calculator';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <Calculator />
      <GlobalStyle />
    </Container>
  );
}

export default App;
