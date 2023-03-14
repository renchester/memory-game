import logoWhite from '../assets/img/logo-white.svg';
import logoBlack from '../assets/img/logo-black.svg';
import { ACTIONS } from '../gameReducer';

export default function Logo(props) {
  const { isDark, dispatch } = props;

  const handleClick = () => dispatch({ type: ACTIONS.RESET_TO_HOME });

  const textStyle = {
    color: isDark ? 'var(--color-text)' : 'var(--color-text-opposite)',
  };

  return (
    <button className="logo" type="button" onClick={handleClick}>
      <img
        src={isDark ? logoBlack : logoWhite}
        alt="Avatar logo"
        className="logo__image"
      />

      <h2 className="logo__text" style={textStyle}>
        Memory Game
      </h2>
    </button>
  );
}
