import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

import questionMarkImage from 'images/questionmarkyellow.png';

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const StyledDiv = styled.div`
    background-color: #FF610F;
    min-width: 30%;
    max-width: 50%;
    min-height: 150px;
    padding: 24px;
    font-size: 20px;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

const StyledImg = styled.img`
  height: 150px;
`

const ImgWrapper = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: center;
`

const QuoteBox = (props) => {
  return (
    <WrapperDiv>
      <ImgWrapper>
        {props.showImage ? 
          <StyledImg src={props.image} />
          : 
          <StyledImg src={questionMarkImage} /> 
        }
      </ImgWrapper>
      
      <StyledDiv>
        <div>{props.children}</div>
      </StyledDiv>
    </WrapperDiv>
  )
};

QuoteBox.propTypes = {
    showImage: PropTypes.bool.isRequired,
}

export default QuoteBox;
