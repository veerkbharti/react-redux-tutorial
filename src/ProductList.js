import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <>
      <h2>Product list</h2>
          <div className="d-flex">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
      </div>
    </>
  );
};

export default ProductList;
