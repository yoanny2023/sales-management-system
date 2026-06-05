import Button from "@/components/ui/Button";
import { IconPlus } from "@tabler/icons-react";

export default function ProductsHeader() {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          Products
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Manage your inventory and products
        </p>
      </div>

      <Button className="self-end">
        <IconPlus size={18} />
        <span>Add Product</span>
      </Button>
    </section>
  );
}