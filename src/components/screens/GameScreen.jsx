import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import Scoreboard from '../Scoreboard';
import Card from '../Card';

import bgImage from '../../assets/img/lake-laogai-vault.webp';

function GameScreen(props) {
  const { gameState, highScore, currentScore, handleClick } = props;

  const [isCardFlipped, setCardFlip] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        exit={{ scale: 0, opacity: 0 }}
        className="screen screen-game"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Scoreboard currentScore={currentScore} highScore={highScore} />
        <div className="screen-game__cards-container">
          {gameState.characters.map((char) => (
            <Card
              key={char.id}
              char={char}
              handleClick={handleClick}
              isCardFlipped={isCardFlipped}
              setCardFlip={setCardFlip}
            />
          ))}

          <span className="screen-game__current-score">
            {currentScore} / {gameState.characters.length}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default GameScreen;
