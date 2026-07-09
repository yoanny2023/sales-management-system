"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";

import { useProducts } from "@/features/products/hooks/useProducts";
import { SaleFormData, saleSchema } from "../schemas/sale.schema";

type SaleFormProps = {
  onSubmit: (data: SaleFormData) => Promise<void>;
  isLoading: boolean;
  submitLabel: string;
  error?: string | null;
};

function SaleForm({
  onSubmit,
  isLoading,
  submitLabel,
  error,
}: SaleFormProps) {
  const { products, isLoading: isLoadingProducts } = useProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<
    z.input<typeof saleSchema>,
    unknown,
    SaleFormData
  >({
    resolver: zodResolver(saleSchema),
    defaultValues: {
      productId: 0,
      quantity: 1,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <FormSelect
        label="Product"
        id="productId"
        error={errors.productId?.message}
        disabled={isLoadingProducts}
        {...register("productId")}
      >
        <option value="">Select a product</option>

        {products.map((product) => (
          <option
            key={product.id}
            value={product.id}
          >
            {product.name}
          </option>
        ))}
      </FormSelect>

      <FormInput
        label="Quantity"
        id="quantity"
        type="number"
        min="1"
        step="1"
        placeholder="Enter quantity"
        error={errors.quantity?.message}
        {...register("quantity")}
      />

      {error && (
        <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={isLoading || isLoadingProducts}
        className="w-full"
      >
        {isLoading ? "Saving..." : submitLabel}
      </Button>
    </form>
  );
}

export default SaleForm;