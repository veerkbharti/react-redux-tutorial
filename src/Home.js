import { useState } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="container">
      <Navbar />

      <ProductList/>
    </div>
  );
};

export default Home;
