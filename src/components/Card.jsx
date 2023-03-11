function Card(props) {
  const { id, img, name, handleClick } = props;

  return (
    <button type="button" className="card" onClick={(e) => handleClick(e, id)}>
      <div className="card__image-container">
        <img src={img} alt={name} className="card__image" />
      </div>
      <span>{name}</span>
    </button>
  );
}

export default Card;
