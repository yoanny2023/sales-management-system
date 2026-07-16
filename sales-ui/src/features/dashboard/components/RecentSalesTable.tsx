import { useMemo } from "react";
import { useSales } from "@/features/sales/hooks/useSales";
import ErrorState from "@/components/ui/ErrorState";
import EmptyState from "@/components/ui/EmptyState";
import { formatDate } from "@/utils/formatDate";
import Skeleton from "@/components/ui/Skeleton";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

export default function RecentSalesTable() {
  const {sales,isLoading,error,} = useSales();
  const container = useRef<HTMLElement>(null);

  const recentSales = useMemo(() => {
    return sales.slice(0, 5);
  }, [sales]);

  useGSAP(
  () => {
    if (!container.current || recentSales.length === 0) return;

    gsap.from(container.current.querySelectorAll("tbody tr"), {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        once: true,
      },
    });
  },
  {
    dependencies: [recentSales],
  }
);

  if (isLoading) return <Skeleton />;

  if (error) return <ErrorState error={error} /> 

  if (recentSales.length === 0) return <EmptyState title="Recent sales" description="No Sales found" />
     
  return (
    <section
      ref={container}
      className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-zinc-100">
          Recent Sales
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Latest completed sales
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm text-zinc-500">
              <th className="pb-3 font-medium">Sale ID</th>
              <th className="pb-3 font-medium">Items</th>
              <th className="pb-3 font-medium">Total</th>
              <th className="pb-3 font-medium">Date</th>
            </tr>
          </thead>

          <tbody>
            {recentSales.map((sale) => (
              <tr
                key={sale.id}
                className="rounded-2xl bg-zinc-950/50 transition-colors duration-300 hover:bg-zinc-900"
              >
                <td className="rounded-l-2xl px-4 py-4 text-sm font-medium text-zinc-200">
                  #{sale.id}
                </td>

                <td className="px-4 py-4 text-sm text-zinc-400">
                  {sale.items.length}
                </td>

                <td className="px-4 py-4 text-sm font-medium text-zinc-100">
                  ${sale.total.toFixed(2)}
                </td>

                <td className="rounded-r-2xl px-4 py-4 text-sm text-zinc-500">
                  {formatDate(sale.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

