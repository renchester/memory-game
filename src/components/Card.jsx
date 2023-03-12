import { useEffect } from 'react';

function Card(props) {
  const { char, handleClick, isCardFlipped, setCardFlip } = props;
  const { id, img, name } = char;

  const CARD_TIMEOUT = 1000;
  const ANIMATION_DURATION = CARD_TIMEOUT / 2;

  useEffect(() => {
    setTimeout(() => {
      setCardFlip(true);
    }, CARD_TIMEOUT);
  }, [isCardFlipped]);

  return (
    <div className={isCardFlipped ? 'card card--flipped' : 'card'}>
      <button
        type="button"
        className="card-side front"
        onClick={(e) => {
          setCardFlip(() => false);
          setTimeout(() => {
            handleClick(e, id);
          }, ANIMATION_DURATION);
        }}
      >
        <div className="card__image-container">
          <img src={img} alt={name} className="card__image" />
        </div>
        <span className="card__image-title">{name}</span>
      </button>
      <div className="card-side back" />
    </div>
  );
}

export default Card;
