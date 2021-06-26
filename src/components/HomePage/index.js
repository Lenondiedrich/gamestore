import styles from './styles.module.scss';
import Game from '../Game/index';

export default function HomePage() {
    return (
        <div className={styles.homeContainer}>
            <Game
            id="123"
            name="Call of duty"
            price={12.90}
            score={100}
            image="http://google.com.br"
            />
        </div>
    )
}