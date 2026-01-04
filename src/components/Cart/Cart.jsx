import React from "react";
import "./Cart.css";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="cart">
        <h3>Cart</h3>
        <p>Empty cart</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>Cart ({totalItems})</h3>
      <p>Total: ₹ {totalPrice}</p>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-main">
              <span>{item.title}</span>
              <span>₹ {item.price}</span>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
