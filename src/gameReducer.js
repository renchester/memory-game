import shuffleCharacters from './helpers';
import characterData from './characters';

export const ACTIONS = {
  START_GAME: 'start-game',
  RESET_TO_HOME: 'reset-to-home',
  WIN_GAME: 'win-game',
  CLICK_CARD: 'click-card',
  INCREMENT_SCORE: 'increment-score',
  TOGGLE_SOUND: 'toggle-sound',
};

// Add property to character data
export const cardCharacters = shuffleCharacters(characterData).map((char) => ({
  ...char,
  isClicked: false,
}));

const getSoundPreference = () => {
  const pref = localStorage.getItem('allowSoundsMemory');

  return pref ? JSON.parse(pref) : true;
};

export const createInitialGameState = (charArray) => ({
  characters: charArray,
  isGameStart: false,
  isGameOver: false,
  isWin: false,
  isLogoDark: true,
  currentScore: 0,
  highScore: JSON.parse(localStorage.getItem('highScoreMemory')) || 0,
  allowSounds: getSoundPreference(),
});

const endGame = (gameState) => {
  const highScore =
    gameState.currentScore > gameState.highScore
      ? gameState.currentScore
      : gameState.highScore;

  return {
    ...gameState,
    currentScore: 0,
    highScore,
    isGameOver: true,
    isLogoDark: false,
  };
};

export const gameReducer = (gameState, action) => {
  switch (action.type) {
    case ACTIONS.START_GAME: {
      return {
        ...createInitialGameState(cardCharacters),
        isGameStart: true,
        isLogoDark: false,
      };
    }
    case ACTIONS.RESET_TO_HOME: {
      return {
        ...createInitialGameState(cardCharacters),
        currentScore: 0,
        isLogoDark: true,
        isWin: false,
      };
    }
    case ACTIONS.WIN_GAME: {
      return endGame({
        ...gameState,
        isWin: true,
      });
    }
    case ACTIONS.INCREMENT_SCORE: {
      return {
        ...gameState,
        currentScore: gameState.currentScore + 1,
      };
    }
    case ACTIONS.CLICK_CARD: {
      const chosenCharacter = gameState.characters.find(
        (char) => char.id === action.id,
      );

      if (chosenCharacter.isClicked) {
        return endGame(gameState);
      }

      const arrayWithClickedChar = gameState.characters.map((char) =>
        char.id === action.id ? { ...char, isClicked: true } : char,
      );

      return {
        ...gameState,
        characters: shuffleCharacters(arrayWithClickedChar),
      };
    }
    case ACTIONS.TOGGLE_SOUND: {
      return {
        ...gameState,
        allowSounds: !gameState.allowSounds,
      };
    }

    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};
