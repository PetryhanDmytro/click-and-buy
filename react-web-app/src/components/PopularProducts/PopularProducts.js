import React from "react";
import ProductCard from "../ProductCard";
import "./PopularProductsStyles.css";
export default function PopularProducts({ title, products }) {
  return (
    <section className="popular-products">
      <h2 className="section-title">{title}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
