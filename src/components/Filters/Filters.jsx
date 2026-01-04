import React from "react";
import "./Filters.css";

const Filters = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
  categories,
}) => {
  const handleClear = () => {
    onSearchChange("");
    onCategoryChange("all");
    onSortOrderChange("none");
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "all" ? "All categories" : cat}
          </option>
        ))}
      </select>
      <select
        value={sortOrder}
        onChange={(e) => onSortOrderChange(e.target.value)}
      >
        <option value="none">Sort by price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>
      <button type="button" onClick={handleClear}>
        Clear all
      </button>
    </div>
  );
};

export default Filters;
