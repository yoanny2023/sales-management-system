import { recentSales } from "../data/mockDashboard";

export default function RecentSalesTable() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-zinc-100">
            Recent Sales
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Latest business transactions
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm text-zinc-500">
              <th className="pb-3 font-medium"> Customer </th>

              <th className="pb-3 font-medium"> Product </th>

              <th className="pb-3 font-medium"> Amount </th>

              <th className="pb-3 font-medium"> Status </th>

              <th className="pb-3 font-medium"> Date </th>
            </tr>
          </thead>

          <tbody>
            {recentSales.map((sale) => (
              <tr
                key={sale.id}
                className="rounded-2xl bg-zinc-950/50 transition-colors hover:bg-zinc-900 duration-300"
              >
                <td className="rounded-l-2xl px-4 py-4 text-sm text-zinc-200">
                  {sale.customer}
                </td>

                <td className="px-4 py-4 text-sm text-zinc-400">
                  {sale.product}
                </td>

                <td className="px-4 py-4 text-sm font-medium text-zinc-100">
                  ${sale.amount}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      sale.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : sale.status === "Pending"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {sale.status}
                  </span>
                </td>

                <td className="rounded-r-2xl px-4 py-4 text-sm text-zinc-500">
                  {sale.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}