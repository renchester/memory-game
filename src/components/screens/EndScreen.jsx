import { motion, AnimatePresence } from 'framer-motion';
import ReactHowler from 'react-howler';

import bgImageWin from '../../assets/img/eastern-air-temple-2.png';
import bgImageLose from '../../assets/img/lake-laogai-loading.jpg';

import winningGif from '../../assets/img/gifs/aang-winning-gif.webp';
import losingGif from '../../assets/img/gifs/iroh-losing-gif.gif';

import winningMusic from '../../assets/sounds/win-music.mp3';
import losingMusic from '../../assets/sounds/loss-music.mp3';

function EndScreen(props) {
  const { isWin, restartGame, soundOn } = props;

  return (
    <AnimatePresence>
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        className="screen screen-end"
        style={{
          backgroundImage: isWin ? `url(${bgImageWin})` : `url(${bgImageLose})`,
        }}
      >
        {soundOn && (
          <ReactHowler
            src={isWin ? winningMusic : losingMusic}
            playing
            volume={isWin ? 0.2 : 0.25}
            loop
          />
        )}
        <div className="screen-end__modal">
          <span className="screen-end__modal-message">
            {isWin
              ? 'Congratulations! Now Aang and Appa will be together again! The fate of the world is in good hands.'
              : 'Uncle Iroh is disappointed in you. Now the Dai Li will have you under their control and Aang & Appa will stay separated.'}
          </span>
          <button
            type="button"
            className="btn btn__play-again"
            onClick={restartGame}
          >
            Play Again
          </button>
        </div>
        <div className="screen-end__gif">
          {isWin ? (
            <img
              src={winningGif}
              alt="Aang jumping up and down"
              className="screen-end__gif--winning"
            />
          ) : (
            <img
              src={losingGif}
              alt="Uncle Iroh crying"
              className="screen-end__gif--losing"
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default EndScreen;
