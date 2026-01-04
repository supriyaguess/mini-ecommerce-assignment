import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onClick={() => onProductClick?.(p)}
        />
      ))}
    </div>
  );
};

export default ProductList;
