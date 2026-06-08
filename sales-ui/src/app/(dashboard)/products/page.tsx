"use client"

import PageContainer from "@/components/layout/PageContainer";
import ProductsHeader from "@/features/products/components/ProductsHeader";
import ProductFilters from "@/features/products/components/ProductFilters";
import ProductTable from "@/features/products/components/ProductTable";
import { useProducts } from "@/features/products/hooks/useProducts";
import { useMemo, useState } from "react";
import { SortOption, StockFilter } from "@/features/products/types/product.types";

export default function ProductsPage() {
  const{products,isLoading,error} = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const filteredProducts = useMemo(() => {
  let result = [...products];

  if (searchTerm.trim()) {
    result = result.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (stockFilter === "low-stock") {
    result = result.filter(
      (product) => product.stock > 0 && product.stock <= 3
    );
  }

  if (stockFilter === "out-of-stock") {
    result = result.filter((product) => product.stock === 0);
  }

  if (stockFilter === "in-stock") {
    result = result.filter((product) => product.stock > 0);
  }

  switch (sortBy) {
    case "name-asc":
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    case "name-desc":
      result.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      break;

    case "price-asc":
    result.sort((a, b) =>
      a.price - b.price
    );
    break;

    case "price-desc":
      result.sort((a, b) =>
        b.price - a.price
      );
      break;

    case "oldest":
      result.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      );
      break;

    case "newest":
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
      break;
  }

  return result;
}, [products, searchTerm, stockFilter, sortBy]);

  return (
    <PageContainer className="space-y-6" >
      <ProductsHeader />
      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        stockFilter={stockFilter}
        onStockFilterChange={setStockFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <ProductTable
       products={filteredProducts}
       totalProducts={products.length}
       isLoading={isLoading}
       error={error}
      />
    </PageContainer>
  );
}