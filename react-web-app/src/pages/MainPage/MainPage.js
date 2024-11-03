import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import HomePage from "../HomePage";
import ProductPage from "../ProductPage";
import CatalogPage from "../CatalogPage";
import AboutStorePage from "../AboutStorePage";
import AuthPage from "../AuthPage";
export default function MainPage() {
  return (
    <div className="home-page">
      <Header />
      <Navigation />
      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      <CatalogPage />
      {/* <AboutStorePage /> */}
      <AuthPage />
    </div>
  );
}
