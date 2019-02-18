import React from 'react';

import styled from 'styled-components';

const FooterWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    display: flex;

`;

const FillerDiv = styled.div`
  display: flex;
  flex-grow: 1;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`
const Footer = () => {
  return (
    <FooterWrapper>
      <StyledLink 
        href="https://github.com/ranveerdhaliwal/quote-quiz-game-extravaganza"
        target="_blank"
      >
        Github
      </StyledLink>
      <FillerDiv />
      <StyledLink 
        href="https://thesimpsonsquoteapi.glitch.me/"
        target="_blank"
      >
        Using Simpsons Quotes API
      </StyledLink>
    </FooterWrapper>
  )
};


export default Footer;