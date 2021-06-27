import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Game from "../Game";
import Value from '../../StateProvider';

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    await api
      .get("games")
      .then((response) => {
        const allGames = response.data;
        setGames(allGames);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className={styles.sortProducts}>
        <label>
          Ordenar por:
          <select>
            <option value="Preço">Preço</option>
            <option value="Popularidade">Popularidade</option>
            <option value="Alfabética">Alfabética</option>
          </select>
        </label>
      </div>
      <section className={styles.gamesList}>
        <ul>
          {games.map((game) => {
            const [{ basket }, dispatch] = Value();

            const addToBasket = () => {
              dispatch({
                type: "ADD_TO_BASKET",
                item: {
                  id: game.id,
                  name: game.name,
                  image: game.image,
                  price: game.price
                },
              });
            };
            return (
              <li key={game.id}>
                <div className={styles.productDetails}>
                  <Game
                    name={game.name}
                    image={game.image}
                    price={game.price}
                    score={game.score}
                  />
                </div>
                <button className={styles.addToCart} onClick={addToBasket}>
                  <span>Adicionar</span>
                  <img src="/cart-icon.svg" alt="Add to cart" />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
