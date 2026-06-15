import Link from "next/link";
import { ProductTableProps } from "../types/product.types";
import EmptyState from "../../../components/ui/EmptyState";
import Skeleton from "../../../components/ui/Skeleton";
import StockBadge from "./StockBadge";
import ErrorState from "@/components/ui/ErrorState";

export default function ProductTable({products,totalProducts,isLoading,error}:ProductTableProps) {

  if(isLoading) return <Skeleton />

  if (error) return <ErrorState error={error} />
    
  if (products.length === 0) {
    if (totalProducts === 0) {
      return (
        <EmptyState
          title="No products yet"
          description="Start by adding your first product."
        />
      );
    }

    return (
      <EmptyState
        title="No products found"
        description="Try adjusting your search or filters."
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
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="border-b border-zinc-800/50 transition-all duration-200 hover:bg-zinc-800/30"
                >
                  <td className="px-6 py-5">
                    <div>
                      <Link href={`/products/${product.id}`}
                        className="font-medium text-zinc-100 underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors duration-300 hover:text-amber-400"
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
                    <StockBadge stock={product.stock}  />
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}