import React from "react";
import "./ProductCardStyles.css";

export default function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price} грн.</p>
      <button className="buy-button">Купити</button>
    </div>
  );
}
