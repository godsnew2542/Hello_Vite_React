import { formatCurrency } from "../api/SourceData";
import { useCart } from "../Context/CartContext";
import type { Product } from "../type/type";

type ProductCardProps = Product & {
  onAddToCart: (product: Product) => void;
};

export function ProductCard({
  image,
  name,
  description,
  price,
  onAddToCart,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({ image, name, description, price });
    onAddToCart({
      image,
      name,
      description,
      price,
    });
  };

  return (
    <div className="product-card">
      <div className="product-image"> {image} </div>
      <div className="product-info">
        <h3 className="product-name"> {name} </h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${formatCurrency(price)}</p>
        <button className="btn btn-primary btn-full" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
