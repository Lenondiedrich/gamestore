import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Game from "../Game";

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
            <img src="/arrow-down-icon.svg" alt="Ordenar por" />
            <option value="Preço">Preço</option>
            <option value="Popularidade">Popularidade</option>
            <option value="Alfabética">Alfabética</option>
          </select>
        </label>
      </div>
      <section className={styles.gamesList}>
        <ul>
          {games.map((game) => {
            return (
              <li key={game.id}>
                <Game
                  name={game.name}
                  image={game.image}
                  price={game.price}
                  score={game.score}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
