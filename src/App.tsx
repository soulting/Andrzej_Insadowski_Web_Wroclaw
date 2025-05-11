import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import products from "./data/products.json";
import { useState } from "react";
import type { ProductType } from "./types/types";
import Cart from "./pages/Cart";
import Summary from "./pages/Summary";

function App() {
  const [cart, setCart] = useState<ProductType[]>([]);

  const endPrice: string = cart
    .reduce(
      (acc, curr) =>
        acc +
        (curr.count ?? 1) * (curr.price.main + curr.price.fractional / 100),
      0
    )
    .toFixed(2);

  function goToFinalPage(): void {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("endPrice", JSON.stringify(endPrice));

    window.location.href = "/confirmation.html";
    setCart([]);
  }

  function handleAddToCart(product: ProductType): void {
    if (cart.some((item) => item.id === product.id)) {
      setCart((items) =>
        items.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count ?? 1) + 1 }
            : item
        )
      );

      return;
    }
    const newCartElement: ProductType = { ...product, count: 1 };

    setCart((items) => [...items, newCartElement]);

    console.log(cart);
    return;
  }

  function changeItemCount(
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ): void {
    e.preventDefault();
    setCart((curCart) =>
      curCart.map((curCartItem) =>
        curCartItem.id === id
          ? { ...curCartItem, count: Number(e.target.value) }
          : curCartItem
      )
    );
  }

  function changeItemCountByOne(id: number, change: number): void {
    setCart((cart) =>
      cart.reduce((acc, item) => {
        if (item.id === id) {
          if (!(item.count === 1 && change === -1)) {
            acc.push({ ...item, count: (item.count ?? 0) + change });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as ProductType[])
    );
  }

  function deleteItem(id: number): void {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <>
      <BrowserRouter basename="/Andrzej_Insadowski_Web_Wroclaw">
        <Routes>
          <Route index element={<Navigate replace to="/product-list" />} />{" "}
          <Route
            path="/product-list"
            element={
              <ProductList products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onchangeItemCount={changeItemCount}
                onDeleteItem={deleteItem}
                onchangeItemCountByOne={changeItemCountByOne}
                endPrice={endPrice}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <Summary
                cart={cart}
                endPrice={endPrice}
                onGoToFinalPage={goToFinalPage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
