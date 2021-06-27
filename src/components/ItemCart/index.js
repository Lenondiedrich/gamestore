import React from 'react';
import Value from "../../StateProvider";
import styles from './styles.module.scss';

export default function ItemCart({ id, image, name, price }) {
    const [{basket}, dispatch] = Value();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className={styles.gameContainer}>
            <img src={image} alt="Game"/>
            <div className={styles.gameInfo}>
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={removeFromBasket}>Remover item</button>
            </div>
        </div>
    )
}

