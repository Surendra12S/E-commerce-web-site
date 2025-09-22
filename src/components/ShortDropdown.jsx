import React from "react";

export default function SortDropdown({ sortBy, setSortBy }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="
        w-auto
        bg-gray-50 border-gray-200 text-gray-700
        text-xs sm:text-sm md:text-base
        rounded-md 
        px-2 sm:px-3 md:px-4
        py-1 sm:py-1.5 
        focus:outline-none focus:ring-1 focus:ring-gray-300
      "
    >
      <option value="name-asc">Name A → Z</option>
      <option value="popularity-desc">Popularity (high → low)</option>
      <option value="popularity-asc">Popularity (low → high)</option>
      <option value="name-desc">Name Z → A</option>
      <option value="price-asc">Price low → high</option>
      <option value="price-desc">Price high → low</option>
    </select>
  );
}
