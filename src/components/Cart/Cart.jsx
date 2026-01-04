import React from "react";
import "./Cart.css";
import { useCart } from "../context/CartContext";
import EmptyState from "../EmptyState/EmptyState";

const Cart = () => {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="cart">
        <h3>Cart</h3>
        <EmptyState title="Empty cart" description="Add some products." />
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>Cart ({totalItems})</h3>
      <p className="cart-summary">
        Total items: {totalItems} | Total price: ₹ {totalPrice}
      </p>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-main">
              <span className="cart-title">{item.title}</span>
              <span className="cart-price">₹ {item.price}</span>
            </div>
            <div className="cart-item-controls">
              <label>
                Qty:
                <input
                  type="number"
                  min="1"
                  max={item.stock}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                />
              </label>
              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
            <div className="cart-item-footer">
              <span>Subtotal: ₹ {item.price * item.quantity}</span>
              <span className="cart-stock">Max stock: {item.stock}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
