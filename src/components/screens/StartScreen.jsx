import { motion, useIsPresent } from 'framer-motion';
import ReactHowler from 'react-howler';

import bgImage from '../../assets/img/loading-screen-2.png';
import loadingMusic from '../../assets/sounds/loading-music.mp3';

function StartScreen(props) {
  const { startGame, soundOn } = props;

  const isPresent = useIsPresent();

  return (
    <>
      <div
        className="screen screen-start"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {soundOn && (
          <ReactHowler src={loadingMusic} playing volume={0.2} loop />
        )}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="screen-start__modal"
        >
          <span className="start-message one">
            You have been kidnapped by the Dai Li and they are trying to
            brainwash you. Only you know the whereabouts of the Avatar's air
            bison, Appa, and without him the world is in danger.
          </span>

          <span className="start-message two">
            You must regain control of your memory by doing this mind exercise
            in order to help the Avatar.
          </span>

          <button
            type="button"
            className="btn btn__start-game"
            onClick={startGame}
          >
            Start game
          </button>
        </motion.div>
      </div>
      <motion.div
        key="privacy-screen"
        className="privacy-screen"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: 'circOut' } }}
        style={{ originX: isPresent ? 1 : 0 }}
      />
    </>
  );
}
export default StartScreen;
