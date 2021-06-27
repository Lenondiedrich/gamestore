import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Game from "../Game";
import Value from "../../StateProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
  const [games, setGames] = useState([]);
  const [sortType, setSortType] = useState('albums');

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

  useEffect(() => {
    const sortArray = type => {
      const types = {
        price: 'price',
        score: 'score',
        name: 'name',
      };
      const sortProperty = types[type];
      if(sortProperty == 'name') {
        const alphabetic = [...games].sort((a, b) => a.name.localeCompare(b.name))
        setGames(alphabetic);
      } else {
        const sorted = [...games].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setGames(sorted);
      }
    };

    sortArray(sortType);
  }, [sortType]);

  function successMessage(){
    toast.success("Item adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })};

  return (
    <div>
      <div className={styles.sortProducts}>
        <label>
          Ordenar por:
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="price">Preço</option>
            <option value="score">Popularidade</option>
            <option value="name">Alfabética</option>
          </select>
        </label>
      </div>
      <ToastContainer />
      <section className={styles.gamesList}>
        <ul>
          {games.map((game) => {
            const [{ basket }, dispatch] = Value();

            function addToBasket(){
              dispatch({
                type: "ADD_TO_BASKET",
                item: {
                  id: game.id,
                  name: game.name,
                  image: game.image,
                  price: game.price,
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
                <button className={styles.addToCart} onClick={() => {addToBasket(); successMessage()}}>
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
