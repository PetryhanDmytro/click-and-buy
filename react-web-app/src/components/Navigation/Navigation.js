import React from "react";
import "./NavigationStyles.css";
export default function CategoryNavigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#" className="nav-link">
          Головна
        </a>
        <a href="#" className="nav-link">
          Каталог
        </a>
        <a href="#" className="nav-link">
          Про магазин
        </a>
      </div>
    </nav>
  );
}
