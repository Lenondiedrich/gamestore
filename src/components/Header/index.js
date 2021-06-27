import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Value from "../../StateProvider";
export default function Header() {
  const [{basket}] = Value();

  return (
    <div className={styles.headerContainer}>
      <Link to="/" style={{textDecoration: 'none'}}>
      <span>GameStore</span>
      </Link>
      <Link to="/cart" style={{textDecoration: 'none'}}>
        <div className={styles.headerBasket}>
          <img src="/shopping-basket.svg" alt="Basket icon" />
          <span>{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}
