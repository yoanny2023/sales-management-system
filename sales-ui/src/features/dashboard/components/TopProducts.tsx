import { useTopProducts } from "../hooks/useTopProducts";
import ErrorState from "@/components/ui/ErrorState";
import EmptyState from "@/components/ui/EmptyState";
import Skeleton from "@/components/ui/Skeleton";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

export default function TopProducts() {
  const {topProducts,isLoading,error,} = useTopProducts();
  const container = useRef<HTMLElement>(null);

  useGSAP(
  () => {
    if (!container.current || topProducts.length === 0) return;

    gsap.from(container.current, {
      opacity: 0,x: 40,duration: 0.7,ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        once: true,
      },
    });
  },
  {
    dependencies: [topProducts],
  }
);

  if (isLoading) return <Skeleton />;
  
  if (error) return <ErrorState error={error} />

  if (topProducts.length === 0) return <EmptyState title="Top Products" description="No products found"  />

  return (
    <section
      ref={container}
      className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm">
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