import Product from "../components/Product";
import styles from "./ProductList.module.css";
import type { ProductListComponentProps, ProductType } from "../types/types";
import { Link } from "react-router-dom";

function ProductList({ products, onAddToCart }: ProductListComponentProps) {
  return (
    <>
      <Link className="navBtn" to="/cart">
        Koszyk
      </Link>
      <div className={styles.productList}>
        {products.map((product: ProductType) => (
          <Product
            product={product}
            key={product.id}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
