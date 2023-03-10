function Scoreboard(props) {
  const { currentScore, highScore } = props;

  return (
    <div className="scoreboard__container">
      <span className="scoreboard__current-score">
        Current Score: {currentScore}
      </span>
      <span className="scoreboard__high-score">High Score: {highScore} </span>
    </div>
  );
}

export default Scoreboard;
