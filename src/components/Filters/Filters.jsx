import React from "react";
import "./Filters.css";

const Filters = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}) => {
  const handleClear = () => {
    onSearchChange("");
    onCategoryChange("all");
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
      <button type="button" onClick={handleClear}>
        Clear all
      </button>
    </div>
  );
};

export default Filters;
