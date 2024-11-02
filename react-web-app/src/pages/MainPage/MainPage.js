import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import HomePage from "../HomePage";
import ProductPage from "../ProductPage";
import AboutStorePage from "../AboutStorePage";
export default function MainPage() {
  return (
    <div className="home-page">
      <Header />
      <Navigation />
      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      <AboutStorePage />
    </div>
  );
}
