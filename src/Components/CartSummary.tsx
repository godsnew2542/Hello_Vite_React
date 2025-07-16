export function CartSummary() {
  return (
    <>
      <h2 className="section-title">Shopping Cart</h2>
      <div className="cart-summary">
        <div className="cart-stats">
          <span>Total Items:</span>
          <span>3</span>
        </div>
        <div className="cart-stats">
          <span>Subtotal:</span>
          <span>$1,547.00</span>
        </div>
        <div className="cart-stats">
          <span>Tax:</span>
          <span>$123.76</span>
        </div>
        <div className="cart-stats">
          <span>
            <strong>Total:</strong>
          </span>
          <span className="cart-total">$1,670.76</span>
        </div>
      </div>
    </>
  );
}
