import type { CartItemProps } from "../types/types";
import styles from "./CartItem.module.css";

function CartItem({
  cartItem,
  onchangeItemCount,
  onDeleteItem,
  onchangeItemCountByOne,
}: CartItemProps) {
  const combinedItemPrice: string = (
    (cartItem.count ?? 1) *
    (cartItem.price.main + cartItem.price.fractional / 100)
  ).toFixed(2);

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemInfo}>
        <h3>{cartItem.name}</h3>
        <p>{`price: ${cartItem.price.main}.${cartItem.price.fractional}`}</p>
        <h2>{`ilość: ${cartItem.count}`}</h2>
        <p>{`suma za ten przedmiot: ${combinedItemPrice}`}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => onchangeItemCountByOne(cartItem.id, 1)}>
          +1
        </button>
        <select
          value={cartItem.count}
          onChange={(e) => onchangeItemCount(e, cartItem.id)}
        >
          {[...Array(10)].map((_, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onchangeItemCountByOne(cartItem.id, -1)}>
          -1
        </button>
        <button onClick={() => onDeleteItem(cartItem.id)}>
          Usuń przedmiot
        </button>
      </div>
    </div>
  );
}

export default CartItem;
