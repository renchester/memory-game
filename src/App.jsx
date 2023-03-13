import { useState, useEffect } from 'react';

import Logo from './components/Logo';
import StartScreen from './components/screens/StartScreen';
import GameScreen from './components/screens/GameScreen';
import EndScreen from './components/screens/EndScreen';
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
    isGameStart: false,
    isGameOver: false,
  };

  const [gameState, setGameState] = useState(initialGameState);
  const [isWin, setWin] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(
    JSON.parse(localStorage.getItem('highScoreMemory')) || 0,
  );
  const [isLogoDark, setLogoDark] = useState(true);

  useEffect(() => {
    localStorage.setItem('highScoreMemory', JSON.stringify(highScore));
  }, [highScore]);

  const startGame = () => {
    setGameState({ ...initialGameState, isGameStart: true });
    setLogoDark(false);
    setWin(false);
  };

  const resetToHomeScreen = () => {
    setGameState(initialGameState);
    setCurrentScore(0);
    setLogoDark(true);
    setWin(false);
  };

  const endGame = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }

    setGameState((prevState) => ({ ...prevState, isGameOver: true }));
    setCurrentScore(0);
    setLogoDark(() => false);
  };

  const clickCard = (e, id) => {
    setCurrentScore((prevScore) => prevScore + 1);

    const chosenCharacter = gameState.characters.find((char) => char.id === id);

    if (chosenCharacter.isClicked) {
      endGame();
      return;
    }

    const arrayWithClickedChar = gameState.characters.map((char) =>
      char.id === id ? { ...char, isClicked: true } : char,
    );
    // Shuffle characters and increment score
    setGameState((prevState) => ({
      ...prevState,
      characters: shuffleCharacters(arrayWithClickedChar),
    }));
  };

  // Checks win condition
  useEffect(() => {
    if (gameState.characters.every((char) => char.isClicked)) {
      setWin(true);
      endGame();
    }
  }, [gameState.characters]);

  return (
    <>
      <Logo isDark={isLogoDark} handleClick={resetToHomeScreen} />

      {!gameState.isGameStart && <StartScreen startGame={startGame} />}

      {gameState.isGameStart && !gameState.isGameOver && (
        <GameScreen
          gameState={gameState}
          currentScore={currentScore}
          highScore={highScore}
          handleClick={clickCard}
        />
      )}

      {gameState.isGameOver && (
        <EndScreen isWin={isWin} restartGame={startGame} />
      )}

      <Footer />
    </>
  );
}

export default App;
