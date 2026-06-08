import Input from "@/components/ui/Input";
import { ProductFiltersProps, SortOption, StockFilter } from "../types/product.types";

export default function ProductFilters({
    searchTerm,
    onSearchChange,
    stockFilter,
    onStockFilterChange,
    sortBy,
    onSortChange
  }:ProductFiltersProps) {

  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full lg:max-w-sm">
        <Input
          type="search"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <select className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-300 outline-none transition-colors focus:border-amber-500"
          value={stockFilter}
          onChange={(e) => onStockFilterChange(e.target.value as StockFilter)}
        >
          <option value="all-stock">All Stock</option>
          <option value="in-stock">In Stock</option>
          <option value="low-stock">Low Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>

        <select className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-300 outline-none transition-colors focus:border-amber-500"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        >
          <option value="newest">Product (newest)</option>
          <option value="oldest">Product (oldest)</option>
          <option value="name-asc">Product (asc)</option>
          <option value="name-des">Product (des)</option>
          <option value="price-asc">Price (Low-High)</option>
          <option value="price-desc">Price (High-Low)</option>
        </select>
      </div>
    </section>     
  );
}