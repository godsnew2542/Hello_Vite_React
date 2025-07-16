import type { ItemCard } from "../type/type";
import {
  calculatePriceWithVat,
  calculateVat,
  countTotalPrice,
  countTotalQuantity,
  formatCurrency,
} from "../api/SourceData";

export function CartSummary(items: ItemCard[]) {
  return (
    <>
      <h2 className="section-title">Shopping Cart</h2>
      <div className="cart-summary">
        <div className="cart-stats">
          <span>Total Items:</span>
          <span>{countTotalQuantity(items)}</span>
        </div>
        <div className="cart-stats">
          <span>Subtotal:</span>
          <span>${formatCurrency(countTotalPrice(items))}</span>
        </div>
        <div className="cart-stats">
          <span>Tax:</span>
          <span>${formatCurrency(calculateVat(items))}</span>
        </div>
        <div className="cart-stats">
          <span>
            <strong>Total:</strong>
          </span>
          <span className="cart-total">
            ${formatCurrency(calculatePriceWithVat(items))}
          </span>
        </div>
      </div>
    </>
  );
}
