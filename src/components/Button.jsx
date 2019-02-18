import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const Highlight = css`
  border: 2px ${props => props.failure ? 'red': 'green'} solid;
`

const StyledButton = styled.button`
  font-size: 16px;
  border: 2px white solid;
  ${props => props.highlight ? Highlight : null};

  background-color: #81c300;
  border-radius: 8px;  
  cursor: pointer;
  color: white;
  padding: 12px 24px;
  margin: 0px 4px;
  text-decoration: none;
  
  &:hover {
    background-color: #6ba200;
  }
  &:active {
    position: relative;
    top: 1px;
  }
 
`

const Button = (props) => {
  return (
    <StyledButton
      {...props}
    >
      {props.children}
    </StyledButton>
  )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    failure: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    highlight: PropTypes.bool.isRequired,
}

export default Button;