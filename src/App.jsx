
import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = useCallback((f) => {
    setFilters(f);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex">

        <div className="hidden md:block">
          <Sidebar onFilterChange={handleFilterChange} />
        </div>


        <main className="flex-1 p-5">
          <Banner />

          <ProductGrid filtersFromSidebar={filters} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
