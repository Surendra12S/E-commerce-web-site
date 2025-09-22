import React, { useState, useEffect } from "react";

const DEFAULT_CATEGORIES = [
  { name: "Nike", count: 2, slug: "nike" },
  { name: "Airmax", count: 48, slug: "airmax" },
  { name: "Nike (Other)", count: 14, slug: "nike-other" },
  { name: "Adidas", count: 15, slug: "adidas" },
  { name: "Vans", count: 23, slug: "vans" },
  { name: "All Stars", count: 1, slug: "allstars" },
  { name: "Adidas Pro", count: 95, slug: "adidas-pro" },
];

const DEFAULT_BRANDS = [
  { name: "Nike", count: 99, slug: "nike" },
  { name: "Adidas", count: 74, slug: "adidas" },
  { name: "Puma", count: 41, slug: "puma" },
  { name: "Reebok", count: 22, slug: "reebok" },
  { name: "Vans", count: 18, slug: "vans" },
  { name: "New Balance", count: 12, slug: "new-balance" },
  { name: "Converse", count: 8, slug: "converse" },
];

const DEFAULT_COLORS = [
  { name: "Black", hex: "#111827" },
  { name: "White", hex: "#ffffff" },
  { name: "Red", hex: "#ef4444" },
  { name: "Blue", hex: "#3b82f6" },
  { name: "Yellow", hex: "#f59e0b" },
  { name: "Pink", hex: "#ec4899" },
];

export default function Sidebar({
  categories = DEFAULT_CATEGORIES,
  brands = DEFAULT_BRANDS,
  colors = DEFAULT_COLORS,
  onFilterChange,
}) {
  const [openSections, setOpenSections] = useState({
    hotDeals: true,
    prices: true,
    color: true,
    brand: true,
  });

  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(300);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const filters = {
      category: selectedCategory,
      brand: selectedBrand,
      color: selectedColor,
      priceRange: { min: minPrice, max: maxPrice },
    };
    if (typeof onFilterChange === "function") onFilterChange(filters);
  }, [selectedCategory, selectedBrand, selectedColor, minPrice, maxPrice, onFilterChange]);

  function toggleSection(key) {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function sectionButtonProps(key) {
    return {
      "aria-expanded": openSections[key],
      "aria-controls": `${key}-panel`,
    };
  }

  const categoryToRender = showAllCategories ? categories : categories.slice(0, 6);
  const brandToRender = showAllBrands ? brands : brands.slice(0, 6);

  const hasActiveFilters =
    selectedCategory || selectedBrand || selectedColor || minPrice !== 10 || maxPrice !== 300;

  return (
    <aside className="w-full md:w-64 lg:w-90 px-1 ml-6 mb-5">
      <div className="space-y-6">
      
        <section className="bg-[#F6F7F8] p-6 mt-6 mb-10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Hot Deals</h3>
            <button
              onClick={() => toggleSection("hotDeals")}
              className="text-sm text-gray-500"
              aria-label={`${openSections.hotDeals ? "Collapse" : "Expand"} Hot Deals`}
              {...sectionButtonProps("hotDeals")}
            >
              {openSections.hotDeals ? "-" : "+"}
            </button>
          </div>
          <div
            id="hotDeals-panel"
            className={`${openSections.hotDeals ? "block" : "hidden"} mt-6`}
          >
            <ul className="space-y-4">
              {categoryToRender.map((c) => (
                <li
                  key={c.slug}
                  className="flex justify-between items-center cursor-pointer py-3 rounded-md"
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === c.slug ? null : c.slug)
                  }
                  aria-pressed={selectedCategory === c.slug}
                >
                  <span className="text-[18px]">{c.name}</span>
                  <span className="text-[18px] text-[#ACAEB0]">{c.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#F6F7F8] p-4 mb-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">PRICES</h3>
            <button
              onClick={() => toggleSection("prices")}
              className="text-sm text-gray-500"
              {...sectionButtonProps("prices")}
            >
              {openSections.prices ? "-" : "+"}
            </button>
          </div>
          <div
            id="prices-panel"
            className={`${openSections.prices ? "block" : "hidden"} mt-4`}
          >
            <div className="text-sm text-gray-600 mb-2">
              Range: ${minPrice} - ${maxPrice}
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </section>

       
        <section className="bg-[#F6F7F8] p-4 mb-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">COLOR</h3>
            <button
              onClick={() => toggleSection("color")}
              className="text-sm text-gray-500"
              {...sectionButtonProps("color")}
            >
              {openSections.color ? "−" : "+"}
            </button>
          </div>
          <div
            id="color-panel"
            className={`${openSections.color ? "block" : "hidden"} mt-4`}
          >
            <div className="flex gap-3 flex-wrap">
              {colors.map((c) => {
                const selected = selectedColor === c.name;
                return (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(selected ? null : c.name)}
                    className={`w-8 h-8 rounded-full border ${
                      selected
                        ? "ring-2 ring-offset-1 ring-blue-400 border-transparent"
                        : "border-gray-200"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-pressed={selected}
                  />
                );
              })}
            </div>
          </div>
        </section>

        
        <section className="bg-[#F6F7F8] p-4 mb-11 mt-10">
          <div className="flex items-center justify-between mt-10">
            <h3 className="text-xl font-medium">BRAND</h3>
            <button
              onClick={() => toggleSection("brand")}
              className="text-sm text-gray-500"
              {...sectionButtonProps("brand")}
            >
              {openSections.brand ? "-" : "+"}
            </button>
          </div>
          <div
            id="brand-panel"
            className={`${openSections.brand ? "block" : "hidden"} mt-4`}
          >
            <ul className="space-y-2">
              {brandToRender.map((b) => (
                <li
                  key={b.slug}
                  className="flex justify-between items-center cursor-pointer px-2 py-2 rounded-md mb-5"
                  onClick={() =>
                    setSelectedBrand(selectedBrand === b.slug ? null : b.slug)
                  }
                >
                  <span className="text-[18px]">{b.name}</span>
                  <span className="text-[18px] text-[#ACAEB0]">{b.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        
        {hasActiveFilters && (
          <div className="flex gap-2 bg-[#F6F7F8] p-2">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedBrand(null);
                setSelectedColor(null);
                setMinPrice(10);
                setMaxPrice(300);
                setShowAllCategories(false);
                setShowAllBrands(false);
              }}
              className="w-full text-sm px-3 py-2 border rounded text-gray-700"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        <div className="bg-[#F6F7F8] p-3">
          <button
            onClick={() => {
              const newVal = !(showAllCategories && showAllBrands);
              setShowAllCategories(newVal);
              setShowAllBrands(newVal);
            }}
            className="w-full py-2 text-lg font-medium text-center rounded"
            aria-expanded={showAllCategories && showAllBrands}
          >
            {showAllCategories && showAllBrands ? "LESS" : "MORE"}
          </button>
        </div>
      </div>
    </aside>
  );
}
