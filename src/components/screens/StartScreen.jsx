import bgImage from '../../assets/img/loading-screen-2.png';

function StartScreen(props) {
  const { startGame } = props;

  const startMessage =
    'You have been kidnapped by the Dai Li and they are trying to brainwash you. You remember an old trick your elders have taught you. You must regain control of your memory by doing this exercise';

  return (
    <div
      className="screen screen-start"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="screen-start__modal">
        {startMessage}

        <button
          type="button"
          className="btn btn__start-game"
          onClick={startGame}
        >
          Start game
        </button>
      </div>
    </div>
  );
}
export default StartScreen;
