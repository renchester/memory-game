import { useState } from 'react';

import Card from './components/Card';
import Footer from './components/Footer';

import characterData from './characters';

function App() {
  // Add propoert to character data
  const cardCharacters = characterData.map((char) => ({
    ...char,
    isClicked: false,
  }));

  const [gameState, setGameState] = useState({
    characters: cardCharacters,
    currentScore: 0,
    highScore: 0,
    isGameOver: false,
  });

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

  const clickCard = (e, id) => {
    const chosenCharacter = gameState.characters.find((char) => char.id === id);

    if (chosenCharacter.isClicked) {
      setGameState({ ...gameState, isGameOver: true });
      return;
    }

    const arrayWithClickedChar = gameState.characters.map((char) =>
      char.id === id ? { ...char, isClicked: true } : char,
    );

    const shuffled = shuffleCharacters(arrayWithClickedChar);

    setGameState((prevState) => ({
      ...prevState,
      characters: shuffled,
    }));
  };

  const rotateCard = (e) => {
    setTimeout(() => {
      e.target.classList.remove('animation');
    }, 500);
  };

  return (
    <>
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
