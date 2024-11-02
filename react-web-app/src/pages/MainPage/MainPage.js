import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import HomePage from "../HomePage";
export default function MainPage() {
  return (
    <div className="home-page">
      <Header />
      <Navigation />
      <HomePage />
    </div>
  );
}
