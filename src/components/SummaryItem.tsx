import type { SummaryItemComponentProps } from "../types/types";

function SummaryItem({ summaryItem }: SummaryItemComponentProps) {
  const combinedItemPrice: string = (
    (summaryItem.count ?? 1) *
    (summaryItem.price.main + summaryItem.price.fractional / 100)
  ).toFixed(2);

  return (
    <div className="">
      <h3>{summaryItem.name}</h3>
      <p>{`price: ${summaryItem.price.main}.${summaryItem.price.fractional}`}</p>
      <h2>{`ilość: ${summaryItem.count}`}</h2>
      <p>{`suma za ten przedmiot: ${combinedItemPrice}`}</p>
    </div>
  );
}

export default SummaryItem;
