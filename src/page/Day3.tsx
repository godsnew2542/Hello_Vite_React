import "./Day3.css";
import { CartHeader } from "../Components/CartHeader";
import { ProductCard } from "../Components/ProductCard";
import type { ItemCard, Product } from "../type/type";
import { CartSummary } from "../Components/CartSummary";
import { CartItem } from "../Components/CartItem";
import { CartActions } from "../Components/CartActions";

export default function Day3() {
  const products: Product[] = [
    {
      image: "📱📱",
      name: "iPhone 15 Pro",
      description:
        "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system",
      price: 999.0,
    },
    {
      image: "💻💻",
      name: "MacBook Pro M3",
      description:
        "Powerful laptop with M3 chip, 16-inch display, and all-day battery life",
      price: 1299.0,
    },
    {
      image: "🎧🎧",
      name: "AirPods Pro",
      description:
        "Premium wireless earbuds with active noise cancellation and spatial audio",
      price: 249.0,
    },
    {
      image: "⌚⌚",
      name: "Apple Watch Series 9",
      description:
        "Advanced health monitoring, fitness tracking, and seamless connectivity",
      price: 399.0,
    },
    {
      image: "🖥️🖥️",
      name: "iMac 24-inch",
      description:
        "All-in-one desktop with M3 chip, stunning 4.5K display, and vibrant colors",
      price: 1299.0,
    },
    {
      image: "📱📱",
      name: "iPad Pro",
      description:
        "Professional tablet with M2 chip, liquid retina display, and Apple Pencil support",
      price: 799.0,
    },
  ];

  const itemCards: ItemCard[] = [
    {
      image: "📱📱",
      name: "iPhone 15 Pro",
      price: 999.0,
      quantity: 1,
    },
    {
      image: "🎧🎧",
      name: "AirPods Pro",
      price: 249.0,
      quantity: 1,
    },
    {
      image: "⌚⌚",
      name: "Apple Watch Series 9",
      price: 299.0,
      quantity: 1,
    },
  ];

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
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="cart-section">
            <CartSummary />

            <div className="cart-items">
              {itemCards.map((item, index) => (
                <CartItem key={index} {...item} />
              ))}
            </div>

            <CartActions />
          </div>
        </div>
      </div>
    </>
  );
}
