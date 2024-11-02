import React from "react";
import "./HeaderS.css";
import { Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="logo">Click & Buy</h1>
      <div className="header-buttons">
        <Search className="btn-icon" />
        <User className="btn-icon" />
        <ShoppingCart className="btn-icon" />
      </div>
    </header>
  );
}
