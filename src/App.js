import React, { useEffect, useState, useMemo } from "react";
import { fetchProducts } from "./api/productsApi";
import ProductList from "./components/ProductList/ProductList";
import Filters from "./components/Filters/Filters";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/context/CartContext";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle");

  // filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

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

  const categories = useMemo(() => {
    const cats = new Set();
    products.forEach((p) => cats.add(p.category));
    return ["all", ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      data = data.filter((p) =>
        p.title.toLowerCase().includes(term)
      );
    }

    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }

    if (sortOrder === "asc") {
      data.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, searchTerm, category, sortOrder]);

  const renderContent = () => {
    if (status === "loading") return <p>Loading products...</p>;
    if (status === "error") return <p>Error loading products</p>;
    return <ProductList products={filteredProducts} />;
  };

  return (
    <CartProvider>
      <div className="app">
        <header className="app-header">
          <h1>Mini E‑Commerce</h1>
        </header>
        <main className="app-main">
          <div className="app-container">
            <section className="products-section">
              <h2>Products ({filteredProducts.length})</h2>
              <Filters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                category={category}
                onCategoryChange={setCategory}
                sortOrder={sortOrder}
                onSortOrderChange={setSortOrder}
                categories={categories}
              />
              {renderContent()}
            </section>
            <aside className="cart-section">
              <Cart />
            </aside>
          </div>
        </main>
      </div>
    </CartProvider>
  );
};

export default App;
