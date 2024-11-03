import React from "react";
import "./ProductGridStyles.css";
import ProductCard from "../ProductCard";
export default function ProductGrid({ products }) {
  return (
    <main className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </main>
  );
}
