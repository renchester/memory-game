import { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import useSound from 'use-sound';

import cardFlipSound from '../assets/sounds/card-flip.wav';

function Card(props) {
  const { char, handleClick, isCardFlipped, setCardFlip } = props;
  const { id, img, name } = char;

  const [playFlipSound] = useSound(cardFlipSound, { volume: 0.18 });

  const CARD_TIMEOUT = 1000;
  const ANIMATION_DURATION = CARD_TIMEOUT / 2;

  useEffect(() => {
    setTimeout(() => {
      setCardFlip(true);
    }, CARD_TIMEOUT);
  }, [isCardFlipped]);

  return (
    <Tilt
      tiltMaxAngleX={18}
      tiltMaxAngleY={18}
      glareEnable
      glareMaxOpacity={0.2}
    >
      <div className={isCardFlipped ? 'card card--flipped' : 'card'}>
        <button
          type="button"
          className="card-side front"
          onClick={(e) => {
            playFlipSound();
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
    </Tilt>
  );
}

export default Card;
