"use client";

import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";
import ErrorState from "@/components/ui/ErrorState";
import Skeleton from "@/components/ui/Skeleton";
import { SalesTableProps } from "../types/sale.types";

export default function SalesTable({
  sales,
  totalSales,
  isLoading,
  error,
}: SalesTableProps) {
  if (isLoading) return <Skeleton />;

  if (error) return <ErrorState error={error} />;

  if (sales.length === 0) {
    return (
      <EmptyState
        title={
          totalSales === 0
            ? "No sales yet"
            : "No sales found"
        }
        description={
          totalSales === 0
            ? "Start by creating your first sale."
            : "Try adjusting your filters."
        }
      />
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Sale
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Items
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Total
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Created
              </th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr
                key={sale.id}
                className="border-b border-zinc-800/50 transition-all duration-200 hover:bg-zinc-800/30"
              >
                <td className="px-6 py-5">
                  <div>
                    <Link
                      href={`/sales/${sale.id}`}
                      className="font-medium text-zinc-100 underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors duration-300 hover:text-amber-400"
                    >
                      Sale #{sale.id}
                    </Link>

                    <p className="text-sm text-zinc-500">
                      View details
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5 text-zinc-300">
                  {sale.items.length}
                </td>

                <td className="px-6 py-5 text-zinc-300">
                  ${sale.total.toFixed(2)}
                </td>

                <td className="px-6 py-5 text-sm text-zinc-500">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(sale.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}