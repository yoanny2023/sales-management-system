"use client";

import { SaleItem } from "../types/sale.types";

type SaleItemsTableProps = {
  items: SaleItem[];
};

function SaleItemsTable({
  items,
}: SaleItemsTableProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px]">
          <thead className="border-b border-zinc-800 bg-zinc-950/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Quantity
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Unit Price
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Subtotal
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr
                key={item.product.id}
                className="border-b border-zinc-800/50"
              >
                <td className="px-6 py-5 text-zinc-100">
                  {item.product.name}
                </td>

                <td className="px-6 py-5 text-zinc-300">
                  {item.quantity}
                </td>

                <td className="px-6 py-5 text-zinc-300">
                  ${item.unitPrice.toFixed(2)}
                </td>

                <td className="px-6 py-5 font-medium text-amber-400">
                  ${(item.quantity * item.unitPrice).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default SaleItemsTable;