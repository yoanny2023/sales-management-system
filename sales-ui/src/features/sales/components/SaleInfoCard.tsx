"use client";

import { Sale } from "../types/sale.types";

type SaleInfoCardProps = {
  sale: Sale;
};

function SaleInfoCard({ sale }: SaleInfoCardProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h2 className="mb-6 text-xl font-semibold text-zinc-100">
        Sale Information
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-sm text-zinc-500">Sale ID</p>

          <p className="mt-1 text-lg font-medium text-zinc-100">
            #{sale.id}
          </p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">Total</p>

          <p className="mt-1 text-lg font-medium text-amber-400">
            ${sale.total.toFixed(2)}
          </p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">Created</p>

          <p className="mt-1 text-lg font-medium text-zinc-100">
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(new Date(sale.createdAt))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SaleInfoCard;