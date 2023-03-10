import { useState, useEffect } from 'react';

import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import Footer from './components/Footer';

import characterData from './characters';

function App() {
  // Add property to character data
  const cardCharacters = characterData.map((char) => ({
    ...char,
    isClicked: false,
  }));

  const [gameState, setGameState] = useState({
    characters: cardCharacters,
    currentScore: 0,
    isGameOver: false,
  });
  const [highScore, setHighScore] = useState(
    JSON.parse(localStorage.getItem('highScoreMemory')) || 0,
  );

  useEffect(() => {
    localStorage.setItem('highScoreMemory', JSON.stringify(highScore));
  }, [highScore]);

  // Fisher-Yates shuffle algorithm
  const shuffleCharacters = (array) => {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }

    return newArray;
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
      {!gameState.isGameOver && (
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
