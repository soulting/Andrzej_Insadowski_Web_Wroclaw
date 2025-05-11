import styles from "./Product.module.css";
import type { ProductComponentProps } from "../types/types";

function Product({ product, onAddToCart }: ProductComponentProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p>{`price: ${product.price.main}.${product.price.fractional}`}</p>
      </div>
      <button className={styles.addToCart} onClick={() => onAddToCart(product)}>
        Dodaj do koszyka
      </button>
    </div>
  );
}

export default Product;
