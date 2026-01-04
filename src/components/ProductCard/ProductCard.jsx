import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const isOutOfStock = product.stock <= 0;

  return (
    <div className="product-card">
      {product.thumbnail && (
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      )}
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">₹ {product.price}</p>
      <p className={`product-stock ${isOutOfStock ? "out" : "in"}`}>
        {isOutOfStock ? "Out of stock" : "In stock"}
      </p>
    </div>
  );
};

export default ProductCard;
