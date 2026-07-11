"use client";

import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import { useSales } from "@/features/sales/hooks/useSales";
import SalesTable from "@/features/sales/components/SalesTable";
import { useMemo, useState } from "react";
import { DateFilter, SaleSortOption } from "@/features/sales/types/sale.types";
import SalesFilters from "@/features/sales/components/SalesFilters";
import { IconPlus } from "@tabler/icons-react";

function SalesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState<DateFilter>("all");
  const [sortBy, setSortBy] = useState<SaleSortOption>("newest");
  const {sales,isLoading,error,} = useSales();

  const filteredSales = useMemo(() => {
  let result = [...sales];

  if (searchTerm.trim()) {
    result = result.filter((sale) =>
      sale.items.some((item) =>
        item.product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }

  const now = new Date();

  switch (dateFilter) {
    case "today":
      result = result.filter((sale) => {
        const date = new Date(sale.createdAt);

        return (
          date.toDateString() ===
          now.toDateString()
        );
      });
      break;

    case "this-week": {
      const oneWeekAgo = new Date();

      oneWeekAgo.setDate(now.getDate() - 7);

      result = result.filter(
        (sale) =>
          new Date(sale.createdAt) >= oneWeekAgo
      );

      break;
    }

    case "this-month":
      result = result.filter((sale) => {
        const date = new Date(sale.createdAt);

        return (
          date.getMonth() === now.getMonth() &&
          date.getFullYear() === now.getFullYear()
        );
      });

      break;
  }

  switch (sortBy) {
    case "total-asc":
      result.sort((a, b) => a.total - b.total);
      break;

    case "total-desc":
      result.sort((a, b) => b.total - a.total);
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
}, [sales, searchTerm, dateFilter, sortBy]);

  return (
    <PageContainer>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-100">
              Sales
            </h1>

            <p className="mt-2 text-zinc-400">
              Manage and view your sales.
            </p>
          </div>

          <Link href="/sales/create" className="self-start">
            <Button>
              <IconPlus size={18} />
              <span>Create Sale</span>
            </Button>
          </Link>
        </div>

        <SalesFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          dateFilter={dateFilter}
          onDateFilterChange={setDateFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <SalesTable
          sales={filteredSales}
          totalSales={sales.length}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </PageContainer>
  );
}

export default SalesPage;