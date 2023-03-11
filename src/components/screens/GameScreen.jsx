import Scoreboard from '../Scoreboard';
import Card from '../Card';

import bgImage from '../../assets/img/lake-laogai-vault.webp';

function GameScreen(props) {
  const { gameState, highScore, currentScore, handleClick } = props;

  return (
    <div
      className="screen screen-game"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <div className="screen-game__cards-container">
        {gameState.characters.map((char) => (
          <Card
            id={char.id}
            key={char.id}
            name={char.name}
            img={char.img}
            handleClick={handleClick}
          />
        ))}

        <span className="screen-game__current-score">
          {currentScore} / {gameState.characters.length}
        </span>
      </div>
    </div>
  );
}

export default GameScreen;

/* <Scoreboard currentScore={gameState.currentScore} highScore={highScore} />
      {gameState.isGameOver ? (
        <div className="modal__reset">
          <button type="button" className="btn__reset-game" onClick={resetToHomeScreen}>
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
      )} */
