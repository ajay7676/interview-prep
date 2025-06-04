import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import ProductCard from "./ProductCard";
import  './pagination.css'

const ProductPage = () => {
  const {
    products,
    filterCategory,
    setFilterCategory,
    searchItem,
    setSearchItem,
    sortItem,
    setSortItem,
    currentPage,
    setCurrentpage,
  } = useContext(ProductContext);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  //  const filterProducts = filterCategory === "all" ? products : products.filter(p  => p.category === filterCategory)

  //  for Search Input Filter
  const filterProducts = products
    .filter((p) => filterCategory == "all" || p.category === filterCategory)
    .filter((p) => p.title.toLowerCase().includes(searchItem.toLowerCase()));

  if (sortItem === "low") {
    filterProducts.sort((b, a) => b.price - a.price);
  } else if (sortItem === "high") {
    filterProducts.sort((a, b) => b.price - a.price);
  }

    // Pagination logic

  const pageSize = 6;
  const totolProducts = Math.ceil(products.length / pageSize);
  const start = currentPage + pageSize;
  const end = start + pageSize;
 const gotoPreviousPage = () => {
  setCurrentpage(currentPage - 1)
 }
 const gotoNextPage = () => {
   setCurrentpage(currentPage + 1)

 }
 const handleCurrntPage = (k) => {
   setCurrentpage(k)
     
 }
  return (
    <div style={{ padding: 20 }}>
      <h2>🛍️ Product Page</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search..."
          id="search-input"
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          <select
            value={sortItem}
            onChange={(e) => setSortItem(e.target.value)}
          >
            <option>Sort By</option>
            <option value="low"> Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
          <select
            onChange={(e) => setFilterCategory(e.target.value)}
            value={filterCategory}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {filterProducts &&
          filterProducts.slice(start , end).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="pagination-con">
          <div className="pagination">

          <button disabled={currentPage === 0} className="prev-arrow" onClick={() =>gotoPreviousPage()}>⏮️</button>
          {[...Array(totolProducts).keys()].map((k) => (
            <span key={k} className={"pagination-no " + (k === currentPage ? "active" : " ")} onClick={() =>handleCurrntPage(k)}>
              {k+1}
            </span>
          ))}
          <button disabled={currentPage === totolProducts -1} className="next-arrow" onClick={() =>gotoNextPage()}>⏭️</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
