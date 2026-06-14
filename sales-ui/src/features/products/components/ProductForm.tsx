"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/forms/FormInput";
import {productSchema,ProductFormData,} from "../schemas/product.schema";
import Button from "@/components/ui/Button";
import {z} from "zod";

type ProductFormProps = {
  defaultValues?: ProductFormData;
  onSubmit: (data: ProductFormData) => Promise<void>;
  isLoading: boolean;
  submitLabel: string;
  error?: string | null;
};
      
function ProductForm({
  defaultValues,
  onSubmit,
  isLoading,
  submitLabel,
  error
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm< z.input< typeof productSchema >,
  unknown,
  ProductFormData >({
      resolver: zodResolver(productSchema),
      defaultValues:
        defaultValues ?? {
          name: "",
          price: 0,
          stock: 0,
        },
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <FormInput
        label="Product Name"
        id="name"
        placeholder="Enter product name"
        error={errors.name?.message}
        {...register("name")}
      />

      <FormInput
        label="Price"
        id="price"
        type="number"
        step="0.01"
        min="0"
        placeholder="0.00"
        error={errors.price?.message}
        {...register("price")}
      />

      <FormInput
        label="Stock"
        id="stock"
        type="number"
        min="0"
        step="1"
        placeholder="0"
        error={errors.stock?.message}
        {...register("stock")}
      />  

      {error && (
        <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </p>
      )
      }

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Saving..." : submitLabel}
      </Button>
    </form>
  );
}

export default ProductForm;