import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products";
import Pagination from "./Pagination"; 
import SortDropdown from "./ShortDropdown.jsx";
import SwitchImg from "../assets/SwitchImg.png";
import menuImg from "../assets/menu.png";


const normalize = (s = "") =>
  String(s).toLowerCase().replace(/[^a-z0-9]/g, "");

export default function ProductGrid(props) {
  const filtersFromSidebar = props.filtersFromSidebar ?? props.filters ?? {};
  const [sortBy, setSortBy] = useState("popularity-desc");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6); 

  const products = productsData || [];

 
  const filtersKey = useMemo(
    () => JSON.stringify(filtersFromSidebar || {}),
    [filtersFromSidebar]
  );

  
  const filtered = useMemo(() => {
    const { category, brand, color, priceRange } = filtersFromSidebar || {};
    const nCategory = category ? normalize(category) : null;
    const nBrand = brand ? normalize(brand) : null;
    const nColor = color ? normalize(color) : null;
    const min = priceRange?.min ?? 0;
    const max = priceRange?.max ?? Infinity;

    return products.filter((p) => {
      const pCategory = normalize(p.category);
      const pBrand = normalize(p.brand);
      const pColors = (p.colors || []).map((c) => normalize(c));

      if (nCategory && pCategory !== nCategory) return false;
      if (nBrand && pBrand !== nBrand) return false;
      if (nColor && !pColors.includes(nColor)) return false;
      if (p.discountPrice < min || p.discountPrice > max) return false;

      return true;
    });
  }, [products, filtersKey]);

 
  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sortBy) {
      case "name-asc":
        arr.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        arr.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        arr.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      case "price-desc":
        arr.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case "popularity-asc":
        arr.sort((a, b) => a.ratingValue - b.ratingValue);
        break;
      default:
        arr.sort((a, b) => b.ratingValue - a.ratingValue);
    }
    return arr;
  }, [filtered, sortBy]);

 
  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage));
  const pageItems = sorted.slice((page - 1) * perPage, page * perPage);

 
  useEffect(() => {
    setPage(1);
  }, [filtersKey, sortBy, perPage]);

  
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  return (
    <section>
     
<div className="bg-[#F6F7F8] w-270 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mt-5 mb-5">

        
        <div className="text-sm text-gray-600 ml-5">{sorted.length} Items</div>

        
        <div className="flex items-center gap-6">
       
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort By</span>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>

          <div className="flex items-center gap-2 mr-100">
            <span className="text-sm text-gray-600">Show</span>
            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="bg-gray-50 border-gray-200 text-gray-700 text-sm rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={6}>6</option>
              <option value={12}>12</option>
            </select>
          </div>
               <img src={SwitchImg} />
               <img src={menuImg} />
        </div>
      </div>

     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 ">
        {pageItems.length === 0 ? (
          <div className="col-span-full bg-white p-6 rounded shadow text-center">
            No products found.
          </div>
        ) : (
          pageItems.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              selectedColor={filtersFromSidebar.color}
            />
          ))
        )}
      </div>

    
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </section>
  );
}
