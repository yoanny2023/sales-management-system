"use client";

import ProductForm from "./ProductForm";
import {useCreateProduct,} from "../hooks/useCreateProduct";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { IconArrowBack } from "@tabler/icons-react";

function CreateProductForm() {
  const {createProduct,isLoading,error} = useCreateProduct();
  const router = useRouter();

  return (
    <>
      <Button
      className="flex gap-2"
      onClick={() =>{router.replace("/products")}}
      >
      <IconArrowBack size={18} stroke={1} />
        Back
      </Button>

      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-100">
            Create Product
          </h1>

          <p className="text-zinc-500">
            Add a new product
            to inventory.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <ProductForm
            onSubmit={createProduct}
            isLoading={isLoading}
            error={error}
            submitLabel="Create Product"
          />
        </div>
      </div>
    </>
  );
}

export default CreateProductForm;