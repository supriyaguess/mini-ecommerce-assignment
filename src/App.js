import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api/productsApi";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setStatus("loading");
        const result = await fetchProducts();
        setProducts(result);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };
    loadProducts();
  }, []);

  const renderContent = () => {
    if (status === "loading") return <p>Loading products...</p>;
    if (status === "error") return <p>Error loading products</p>;
    return <ProductList products={products} />;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini E‑Commerce</h1>
      </header>
      <main className="app-main">
        <section className="products-section">
          <h2>Products ({products.length})</h2>
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default App;
