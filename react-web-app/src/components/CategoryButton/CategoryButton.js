import React from "react";
import "./CategoryButtonStyles.css";

export default function CategoryButton({ title, onClick }) {
  return (
    <button onClick={onClick} className="category-button">
      {title}
    </button>
  );
}
