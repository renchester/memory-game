import { useState } from 'react';

import { motion } from 'framer-motion';
import ReactHowler from 'react-howler';

import Scoreboard from '../Scoreboard';
import Card from '../Card';

import bgImage from '../../assets/img/lake-laogai-vault.webp';
import gameMusic from '../../assets/sounds/game-music.mp3';

function GameScreen(props) {
  const { gameState, dispatch } = props;
  const { allowSounds, currentScore, highScore } = gameState;

  const [isCardFlipped, setCardFlip] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      key="screen-game"
      className="screen screen-game"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {allowSounds && (
        <ReactHowler src={gameMusic} playing volume={0.25} loop />
      )}

      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <motion.div
        className="screen-game__cards-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        {gameState.characters.map((char) => (
          <Card
            key={char.id}
            char={char}
            dispatch={dispatch}
            isCardFlipped={isCardFlipped}
            setCardFlip={setCardFlip}
          />
        ))}

        <span className="screen-game__current-score">
          {currentScore} / {gameState.characters.length}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default GameScreen;
