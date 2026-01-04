import React from "react";
import "./ProductDetailsModal.css";

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {product.thumbnail && (
          <img
            src={product.thumbnail}
            alt={product.title}
            className="modal-image"
          />
        )}
        <h2>{product.title}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ₹ {product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
