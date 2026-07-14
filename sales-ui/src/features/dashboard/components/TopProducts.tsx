import { useTopProducts } from "../hooks/useTopProducts";
import ErrorState from "@/components/ui/ErrorState";
import EmptyState from "@/components/ui/EmptyState";
import Skeleton from "@/components/ui/Skeleton";

export default function TopProducts() {
  const {topProducts,isLoading,error,} = useTopProducts();

  if (isLoading) return <Skeleton />;
  
  if (error) return <ErrorState error={error} />

  if (topProducts.length === 0) return <EmptyState title="Top Products" description="No products found"  />

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm">
      <h2 className="text-lg font-semibold text-zinc-100">
        Top Products
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        Best-selling products
      </p>

      <div className="mt-8 space-y-5">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-zinc-200">
                {product.name}
              </p>

              <p className="text-sm text-zinc-500">
                Units sold
              </p>
            </div>

            <span className="text-sm font-medium text-amber-400">
              {product.quantitySold}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}