import type { ItemCard } from "../type/type";

export function CartItem({ image, name, price, quantity }: ItemCard) {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-image"> {image} </div>
        <div className="cart-item-info">
          <div className="cart-item-name"> {name} </div>
          <div className="cart-item-price">${price}</div>
        </div>
        <div className="quantity-controls">
          <button className="quantity-btn">-</button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-btn">+</button>
        </div>
        <button className="btn btn-danger btn-small">Remove</button>
      </div>
    </>
  );
}
