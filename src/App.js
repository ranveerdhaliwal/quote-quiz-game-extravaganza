import React, { Component } from 'react';

import Game from 'components/Game';
import Footer from 'components/Footer';

import styled, { createGlobalStyle } from 'styled-components';

import Simpsonfonttff from 'fonts/simpsonfont.ttf';
import Simpsonfontwoff from 'fonts/simpsonfont.woff';
import Simpsonfontwoff2 from 'fonts/simpsonfont.woff2';

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color: #1EC1E4;
    font-family: 'Roboto';
  }

  @font-face {
    font-family: 'Simpsonfont';
    font-style: normal;
    font-weight: normal;
    src: local('Simpsonfont'), url('${Simpsonfonttff}') format('ttf');
    src: local('Simpsonfont'), url('${Simpsonfontwoff}') format('woff');
    src: local('Simpsonfont'), url('${Simpsonfontwoff2}') format('woff2');
  }
`

const StyledTitle = styled.h1`
  color: #FFEE3E;
  font-size: 48px;
  font-family: 'Simpsonfont';
`

const ContentFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

class App extends Component {
  render() {
    return (
      <ContentFrame>
        <GlobalStyle />
        <StyledTitle>Quote Quiz Game Extravaganza</StyledTitle>
        <Game />
        <Footer />
      </ContentFrame>
    );
  }
}

export default App;
