import Select from "@/components/ui/Select";
import { DateFilter, SaleSortOption } from "../types/sale.types";
import Input from "@/components/ui/Input";

type SalesFiltersProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;

  dateFilter: DateFilter;
  onDateFilterChange: (value: DateFilter) => void;

  sortBy: SaleSortOption;
  onSortChange: (value: SaleSortOption) => void;
};

export default function SalesFilters({
  searchTerm,
  onSearchChange,
  dateFilter,
  onDateFilterChange,
  sortBy,
  onSortChange,
}: SalesFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full lg:max-w-sm">
        <Input
          placeholder="Search by product..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <Select
        value={dateFilter}
        onChange={(e) =>
          onDateFilterChange(e.target.value as DateFilter)
        }
      >
        <option value="all">All Time</option>
        <option value="today">Today</option>
        <option value="this-week">This Week</option>
        <option value="this-month">This Month</option>
      </Select>

      <Select
        value={sortBy}
        onChange={(e) =>
          onSortChange(e.target.value as SaleSortOption)
        }
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="total-desc">Highest Total</option>
        <option value="total-asc">Lowest Total</option>
      </Select>
    </div>
  );
}