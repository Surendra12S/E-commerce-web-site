import ProductCard from "./ProductCard";

export default function ProductList({ products, filtersFromSidebar }) {
  if (products.length === 0) {
    return (
      <div className="col-span-full bg-white p-6 rounded shadow text-center">
        No products found. <br />
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-3 px-3 py-2 border rounded"
        >
          Reset filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          selectedColor={filtersFromSidebar.color}
        />
      ))}
    </div>
  );
}
