export type ProductType = {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
  count?: number;
};

export type ProductListComponentProps = {
  products: ProductType[];
  onAddToCart: (product: ProductType) => void;
};

export type ProductComponentProps = {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
};

export type CartComponentProps = {
  cart: ProductType[];
  onchangeItemCount: (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ) => void;
  onDeleteItem: (id: number) => void;
  onchangeItemCountByOne: (id: number, change: number) => void;
  endPrice: string;
};

export type CartItemProps = {
  cartItem: ProductType;
  onchangeItemCount: (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ) => void;
  onDeleteItem: (id: number) => void;
  onchangeItemCountByOne: (id: number, change: number) => void;
};

export type SummaryComponentProps = {
  cart: ProductType[];
  endPrice: string;
  onGoToFinalPage: () => void;
};

export type SummaryItemComponentProps = {
  summaryItem: ProductType;
};
