"use client";

import ProductForm from "./ProductForm";
import {useCreateProduct,} from "../hooks/useCreateProduct";
import PageContainer from "@/components/layout/PageContainer";

function CreateProductForm() {
  const {createProduct,isLoading,error} = useCreateProduct();

  return (
    <PageContainer className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-zinc-100">
          Create Product
        </h1>

        <p className="text-zinc-500">
          Add a new product
          to inventory.
        </p>
      </div>

      <div className="max-w-2xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <ProductForm
          onSubmit={createProduct}
          isLoading={isLoading}
          error={error}
          submitLabel="Create Product"
        />
      </div>
    </PageContainer>
  );
}

export default CreateProductForm;