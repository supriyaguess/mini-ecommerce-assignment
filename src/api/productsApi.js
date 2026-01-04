// Using DummyJSON API for products
const PRODUCTS_URL = "https://dummyjson.com/products?limit=20";

export const fetchProducts = async () => {
  const res = await fetch(PRODUCTS_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.products.map((p) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    category: p.category,
    stock: p.stock,
    thumbnail: p.thumbnail,
  }));
};
