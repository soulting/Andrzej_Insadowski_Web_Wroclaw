import CartItem from "../components/CartItem";
import type { CartComponentProps, ProductType } from "../types/types";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

function Cart({
  cart,
  onchangeItemCount,
  onDeleteItem,
  onchangeItemCountByOne,
  endPrice,
}: CartComponentProps) {
  return (
    <div className={styles.cartComponent}>
      <Link className="navBtn" to="/product-list">
        Wróć
      </Link>
      <div className={styles.cartList}>
        <h2>{`Całkowity koszt przedmiotów: ${endPrice}`}</h2>
        {cart.map((item: ProductType) => (
          <CartItem
            cartItem={item}
            onchangeItemCount={onchangeItemCount}
            onDeleteItem={onDeleteItem}
            onchangeItemCountByOne={onchangeItemCountByOne}
            key={item.id}
          />
        ))}
      </div>
      <Link className="navBtn" to="/summary">
        Podsumowanie
      </Link>
    </div>
  );
}

export default Cart;
