import { useEffect, useReducer } from 'react';

import Logo from './components/Logo';
import StartScreen from './components/screens/StartScreen';
import GameScreen from './components/screens/GameScreen';
import EndScreen from './components/screens/EndScreen';
import Footer from './components/Footer';

import {
  gameReducer,
  cardCharacters,
  createInitialGameState,
  ACTIONS,
} from './gameReducer';

function App() {
  const [gameState, dispatch] = useReducer(
    gameReducer,
    cardCharacters,
    createInitialGameState,
  );

  // Save high score to local storage
  useEffect(() => {
    localStorage.setItem(
      'highScoreMemory',
      JSON.stringify(gameState.highScore),
    );
  }, [gameState.highScore]);

  // Save allow sound preference
  useEffect(() => {
    localStorage.setItem(
      'allowSoundsMemory',
      JSON.stringify(gameState.allowSounds),
    );
  }, [gameState.allowSounds]);

  // Checks win condition
  useEffect(() => {
    if (gameState.characters.every((char) => char.isClicked)) {
      dispatch({ type: ACTIONS.WIN_GAME });
    }
  }, [gameState.characters]);

  const toggleSound = () => {
    dispatch({ type: ACTIONS.TOGGLE_SOUND });
  };

  return (
    <>
      <Logo isDark={gameState.isLogoDark} dispatch={dispatch} />

      {!gameState.isGameStart && (
        <StartScreen soundOn={gameState.allowSounds} dispatch={dispatch} />
      )}

      {gameState.isGameStart && !gameState.isGameOver && (
        <GameScreen gameState={gameState} dispatch={dispatch} />
      )}

      {gameState.isGameOver && (
        <EndScreen gameState={gameState} dispatch={dispatch} />
      )}

      <button type="button" className="btn__toggle-sound" onClick={toggleSound}>
        <div className="material-symbols-outlined">
          {gameState.allowSounds ? 'volume_up' : 'volume_off'}
        </div>
      </button>

      <Footer />
    </>
  );
}

export default App;
