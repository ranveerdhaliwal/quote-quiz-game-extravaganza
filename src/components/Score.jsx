import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ScoreWrapper = styled.div`
    width: 100%;
    display: flex;
    font-size: 16px;
    margin-top: 16px;
`;

const Score = (props) => {
  return (
    <ScoreWrapper>
      Score: {props.score}
    </ScoreWrapper>
  )
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
}

export default Score;