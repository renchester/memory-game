import { useState, useEffect } from 'react';

import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import Footer from './components/Footer';

import characterData from './characters';

import { shuffleCharacters } from './helpers';

function App() {
  // Add property to character data
  const cardCharacters = shuffleCharacters(characterData).map((char) => ({
    ...char,
    isClicked: false,
  }));

  const initialGameState = {
    characters: cardCharacters,
    currentScore: 0,
    isGameStart: false,
    isGameOver: false,
  };

  const [gameState, setGameState] = useState(initialGameState);
  const [highScore, setHighScore] = useState(
    JSON.parse(localStorage.getItem('highScoreMemory')) || 0,
  );

  useEffect(() => {
    localStorage.setItem('highScoreMemory', JSON.stringify(highScore));
  }, [highScore]);

  const resetGame = () => {
    setGameState(initialGameState);
  };

  const endGame = () => {
    if (gameState.currentScore > highScore) {
      setHighScore(gameState.currentScore);
    }

    setGameState({ ...gameState, isGameOver: true, currentScore: 0 });
  };

  const clickCard = (e, id) => {
    const chosenCharacter = gameState.characters.find((char) => char.id === id);

    if (chosenCharacter.isClicked) {
      endGame();
      return;
    }

    const arrayWithClickedChar = gameState.characters.map((char) =>
      char.id === id ? { ...char, isClicked: true } : char,
    );

    // Shuffle characters and increment score
    const shuffled = shuffleCharacters(arrayWithClickedChar);
    setGameState((prevState) => ({
      ...prevState,
      characters: shuffled,
      currentScore: prevState.currentScore + 1,
    }));
  };

  const rotateCard = (e) => {
    setTimeout(() => {
      e.target.classList.remove('animation');
    }, 500);
  };

  return (
    <>
      <Scoreboard currentScore={gameState.currentScore} highScore={highScore} />
      {gameState.isGameOver ? (
        <div className="modal__reset">
          <button type="button" className="btn__reset-game" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      ) : (
        <div className="cards__container">
          {gameState.characters.map((char) => (
            <Card
              id={char.id}
              key={char.id}
              name={char.name}
              img={char.img}
              handleClick={clickCard}
              handleTransitionEnd={rotateCard}
            />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
