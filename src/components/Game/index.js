import formatter from '../../utils/formatter';

export default function Game({ id, name, price, score, image }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="Game" />
      <div>
        <p>Nota: {score}</p>
        <span>{formatter.format(price)}</span>
      </div>
    </div>
  );
}
