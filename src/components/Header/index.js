import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <span>GameStore</span>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <div className={styles.headerBasket}>
          <img src="/shopping-basket.svg" alt="Basket icon" />
          <span>2</span>
        </div>
      </Link>
    </div>
  );
}
