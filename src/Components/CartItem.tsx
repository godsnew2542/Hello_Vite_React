import { formatCurrency } from "../api/SourceData";
import type { CartItemProps, ItemCard } from "../type/type";

export function CartItem({
  image,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  const item: ItemCard = { image, name, price, quantity };
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-image"> {image} </div>
        <div className="cart-item-info">
          <div className="cart-item-name"> {name} </div>
          <div className="cart-item-price">${formatCurrency(price)}</div>
        </div>
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={() => onDecrease(item)}>
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-btn" onClick={() => onIncrease(item)}>
            +
          </button>
        </div>
        <button
          className="btn btn-danger btn-small"
          onClick={() => onRemove(item)}
        >
          Remove
        </button>
      </div>
    </>
  );
}
