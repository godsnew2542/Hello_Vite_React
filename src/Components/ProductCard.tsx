import type { Product } from "../type/type";

export function ProductCard({ image, name, description, price }: Product) {
  return (
    <div className="product-card">
      <div className="product-image"> {image} </div>
      <div className="product-info">
        <h3 className="product-name"> {name} </h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="btn btn-primary btn-full">Add to Cart</button>
      </div>
    </div>
  );
}
