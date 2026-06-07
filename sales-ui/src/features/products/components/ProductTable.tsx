"use client"

import {IconEdit,IconTrash,} from "@tabler/icons-react";
//import { mockProducts } from "../data/mockProducts";
import Link from "next/link";
import { useProducts } from "../hooks/useProducts";
import Loading from "@/components/ui/Loading";

export default function ProductTable() {
  const{products,isLoading,error} = useProducts();

  if(isLoading) return <Loading />

  if (error) {
    return (
      <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
        <p className="text-sm text-red-400">
          {error}
        </p>
      </section>
    );
  }

  if (!products.length) {
    return (
      <section className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/40 p-10 text-center">
        <h3 className="text-lg font-semibold text-zinc-100">
          No products yet
        </h3>

        <p className="mt-2 max-w-sm text-sm text-zinc-500">
          Start by creating your first
          product to manage inventory.
        </p>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Price
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Stock
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                Created
              </th>

              <th className="px-6 py-4 text-right text-sm font-medium text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              const isLowStock = product.stock < 10;

              return (
                <tr
                  key={product.id}
                  className="border-b border-zinc-800/50 transition-all duration-200 hover:bg-zinc-800/30"
                >
                  <td className="px-6 py-5">
                    <div>
                      <Link href={`/products/${product.id}`}
                        className="font-medium text-zinc-100 transition-colors duration-300 hover:text-amber-400"
                      >
                        {product.name}
                      </Link>
                      <p className="text-sm text-zinc-500">
                        Product #{product.id}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-zinc-300">
                    ${product.price}
                  </td>

                  <td className="px-6 py-5 text-zinc-300">
                    {product.stock}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        isLowStock
                          ? "bg-red-500/10 text-red-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {isLowStock ? "Low Stock" : "In Stock"}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm text-zinc-500">
                    {new Intl.DateTimeFormat("en-US",{
                         month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      ).format(new Date(product.createdAt))
                    }
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-xl border border-zinc-700 p-2 text-zinc-400 transition-all cursor-pointer hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400">
                        <IconEdit size={18} />
                      </button>

                      <button className="rounded-xl border border-zinc-700 p-2 text-zinc-400 transition-all cursor-pointer hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400">
                        <IconTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}