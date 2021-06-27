import ItemCart from "../ItemCart";
import Value from "../../StateProvider";
import formatter from "../../utils/formatter";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../../reducer";

export default function CartPage() {
  const [{ basket }] = Value();

  return (
    <div className={styles.checkoutContainer}>
      {basket.length === 0 ? (
        <>
          <h1>Você não possui nenhum produto no carrinho</h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Voltar para a página de produtos</span>
          </Link>
        </>
      ) : (
        <>
          <p style={{ fontSize: "1.5rem" }}>Itens no carrinho:</p>
          <div className={styles.itemContainer}>
            {basket.map((item) => (
              <ItemCart
                id={item.id}
                name={item.name}
                image={item.image}
                price={formatter.format(item.price)}
              />
            ))}
          </div>
          <div className={styles.cartTotal}>
            {
              getBasketTotal(basket) > 250 ? (
                <>
                <p style={{fontSize: '1rem'}}>Compras acima de R$250,00 tem frete grátis!</p>
                <p>Frete: Gratuito</p>
                <p>Total: {formatter.format(getBasketTotal(basket))}</p>
                <Link to="/">
                  <button>Continuar comprando</button>
                </Link>
                </>
              ) : (
                <>
                <p>Frete: {formatter.format(basket.length * 10)}</p>
                <p>Total: {formatter.format(getBasketTotal(basket) + basket.length * 10)}</p>
                <Link to="/">
                  <button>Continuar comprando</button>
                </Link>
                </>
              )
            }
            
          </div>
        </>
      )}
    </div>
  );
}
