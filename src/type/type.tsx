export interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
}

export interface ItemCard {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartItemProps extends ItemCard {
  onIncrease: (item: ItemCard) => void;
  onDecrease: (item: ItemCard) => void;
  onRemove: (item: ItemCard) => void;
}

export interface CartActionsProps {
  items: ItemCard[];
  onClear: () => void;
  onCheckout: (items: ItemCard[]) => void;
}