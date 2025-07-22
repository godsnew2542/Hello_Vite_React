import "./Day3.css";
import { CartHeader } from "../Components/CartHeader";
import { ProductCard } from "../Components/ProductCard";
import type { ItemCard, Product } from "../type/type";
import { CartSummary } from "../Components/CartSummary";
import { CartItem } from "../Components/CartItem";
import { CartActions } from "../Components/CartActions";
import { sourceProducts } from "../api/SourceData";
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { CartItemCard } from "../Components/CartItemCard";

export default function Day3() {
  const products: Product[] = sourceProducts();

  const [itemCards, setCart] = useState<ItemCard[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.name === product.name);

      if (index !== -1) {
        // Product already in cart → increase quantity
        const updatedCart = [...prevCart];
        updatedCart[index].quantity = updatedCart[index].quantity + 1;
        return updatedCart;
      } else {
        // New product → add to cart
        return [
          ...prevCart,
          {
            image: product.image,
            name: product.name,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  };

  const handleIncrease = (item: ItemCard) => {
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const handleDecrease = (item: ItemCard) => {
    if (item.quantity === 1) {
      handleRemove(item);
    } else {
      setCart((prevCart) =>
        prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    }
  };

  const handleRemove = (item: ItemCard) => {
    const confirmRemove = window.confirm(`Remove "${item.name}" from cart?`);
    if (confirmRemove) {
      setCart((prevCart) => prevCart.filter((i) => i.name !== item.name));
    }
  };

  const handleClear = () => {
    const confirmRemove = window.confirm(`Remove All Product`);
    if (confirmRemove) {
      setCart([]);
    }
  };

  const { cartItems } = useCart();

  return (
    <>
      <div className="app-container">
        <CartHeader />

        {/* Main Content */}
        <div className="main-content">
          {/* Products Section */}
          <div className="product-section">
            <h2 className="section-title">Featured Products</h2>
            <div className="product-grid">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="cart-section">
            <CartSummary {...itemCards} />

            <div className="cart-items">
              {cartItems.map((item, index) => (
                <CartItemCard key={index} {...item} />
              ))}
              <hr />
              {itemCards.map((item, index) => (
                <CartItem
                  key={index}
                  {...item}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            {itemCards.length > 0 && (
              <CartActions
                items={itemCards}
                onClear={() => {
                  handleClear();
                }}
                onCheckout={(items) => {
                  console.log("Proceed to checkout with:", items);
                  // your checkout logic here
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
