import { Link } from "react-router-dom";
import type { SummaryComponentProps } from "../types/types";
import SummaryItem from "../components/SummaryItem";

function Summary({ cart, endPrice, onGoToFinalPage }: SummaryComponentProps) {
  return (
    <div>
      <Link className="navBtn" to="/cart">
        Wróć do koszyka
      </Link>
      <h2>{`Cena końcowsa: ${endPrice}`}</h2>
      {cart.map((item) => (
        <SummaryItem summaryItem={item} key={item.id} />
      ))}
      <button className="navBtn" onClick={onGoToFinalPage}>
        Złóż Zamówienie
      </button>
    </div>
  );
}

export default Summary;
