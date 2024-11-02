import React from "react";
import CategoryButton from "../CategoryButton";
import "./PopularCategoriesStyles.css";
export default function PopularCategories({ categories, title }) {
  return (
    <section className="popular-categories">
      <h2 className="section-title">{title}</h2>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryButton key={category} title={category} />
        ))}
      </div>
    </section>
  );
}
