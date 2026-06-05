const products = [
  {
    name: "Nike Air Max",
    sales: 78,
  },
  {
    name: "Jordan Retro",
    sales: 52,
  },
  {
    name: "Adidas Samba",
    sales: 49,
  },
  {
    name: "Puma RS-X",
    sales: 31,
  },
];

export default function TopProducts() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm">
      <h2 className="text-lg font-semibold text-zinc-100">
        Top Products
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        Best-performing products
      </p>

      <div className="mt-8 space-y-5">
        {products.map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-zinc-200">
                {product.name}
              </p>

              <p className="text-sm text-zinc-500">
                Product sales
              </p>
            </div>

            <span className="text-sm font-medium text-amber-400">
              {product.sales}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}