import Input from "@/components/ui/Input";

export default function ProductFilters() {
  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full lg:max-w-sm">
        <Input
          type="search"
          placeholder="Search products..."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <select className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-300 outline-none transition-colors focus:border-amber-500">
          <option>All Stock</option>
          <option>In Stock</option>
          <option>Low Stock</option>
        </select>

        <select className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-300 outline-none transition-colors focus:border-amber-500">
          <option>Newest</option>
          <option>Price High</option>
          <option>Price Low</option>
        </select>
      </div>
    </section>     
  );
}