import type { CartActionsProps } from "../type/type";

export function CartActions({ items, onClear, onCheckout }: CartActionsProps) {
  return (
    <div className="mt-16">
      <button className="btn btn-secondary btn-full" onClick={onClear}>
        Clear Cart
      </button>
      <button
        className="btn btn-primary btn-full mt-16"
        onClick={() => onCheckout(items)}
      >
        Checkout
      </button>
    </div>
  );
}
