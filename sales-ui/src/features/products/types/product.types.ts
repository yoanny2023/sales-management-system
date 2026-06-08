import React from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  createdAt: string;
  userId: number;
}

export type GetProductsResponse = {
  message: string;
  products: Product[];
};

export type ProductTableProps = {
  products: Product[],
  totalProducts: number;
  isLoading: boolean
  error: string | null
}

export type StockFilter = "all" | "in-stock" | "low-stock" | "out-of-stock"
export type SortOption = "newest" | "oldest" | "name-asc" | "name-desc" | "price-asc" | "price-desc"

export type ProductFiltersProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;

  stockFilter: StockFilter;
  onStockFilterChange: React.Dispatch<React.SetStateAction<StockFilter>>;

  sortBy: SortOption;
  onSortChange: React.Dispatch<React.SetStateAction<SortOption>>;
};