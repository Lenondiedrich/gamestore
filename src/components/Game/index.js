import styles from './styles.module.scss';

var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export default function Game({id, name, price, score, image}) {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt="Game"/>
            <div className={styles.gameDetails}>
            <span>{formatter.format(price)}</span>
            </div>
        </div>
    )
}