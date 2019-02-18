import React, { Component } from 'react';

import Button from 'components/Button';
import Score from 'components/Score';
import QuoteBox from 'components/QuoteBox';

import {getRandomNames, shuffle} from 'utils/array-utils'

import styled from 'styled-components';

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

class Game extends Component {
  state = {
    quote: '',
    character: '',
    image: '',
    characterDirection: '',
    characters: [],
    questionAnswered: false,
    score: 0,
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then(results => results[0])
    .then(result => {
      const names = getRandomNames(result.character, 2);

      const characters = this.generateCharacters(result.character, names);
      this.setState({
        characters,
        questionAnswered: false,
        ...result
      });
    });
    
  }

  generateCharacters = (correctCharacter, wrongCharacters) => {
    let characters = wrongCharacters.map((wrongCharacter) => ({
      name: wrongCharacter,
      correct: false
    }));

    characters.push({
      name: correctCharacter,
      correct: true
    });

    return shuffle(characters);
  }

  correctAnswer = () => {
    this.setState((state) => ({
      score: state.score + 1,
      questionAnswered: true,
    }));

    setTimeout(this.getNewQuote, 1000);
  }

  wrongAnswer = () => {
    this.setState((state) => ({
      score: state.score - 1,
      disableAllButtons: true,
      highlightAnswers: true,
      questionAnswered: true,
    }));

    setTimeout(this.getNewQuote, 1000);
  }

  render() {
    const { 
      quote, 
      image,
      characters,
      questionAnswered,
      score,
    } = this.state;

    return (
      <>
        <QuoteBox 
          image={image}
          showImage={questionAnswered ? true : false}
        >
          {quote}
        </QuoteBox>
        <ButtonWrapper>
          {characters.map((character) => (
              <Button 
                key={character.name}
                disabled={questionAnswered ? true : false} 
                onClick={character.correct ? this.correctAnswer : this.wrongAnswer}
                failure={!character.correct ? true : false}
                highlight={questionAnswered ? true : false} 
              >
                {character.name}
              </Button>
            ))}
        </ButtonWrapper>
        <div>
          <Score score={score} />
        </div>
      </>
    );
  }
}

export default Game;
