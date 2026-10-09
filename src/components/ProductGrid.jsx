import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

// Shob category er list (All shoho) - products data theke ber kora
const categories = ["All", ...new Set(products.map((p) => p.category))];

// Product grid + category filter
function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="container catalog" id="catalog">
      <div className="catalog-heading">
        <div>
          <span className="eyebrow">Made for everyday</span>
          <h2 className="section-title">Find your favorites</h2>
        </div>
        <p>{visibleProducts.length} thoughtful picks</p>
      </div>

      <div className="filters" aria-label="Filter products by category">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip ${selectedCategory === cat ? "chip-active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
