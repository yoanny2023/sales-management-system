"use client";

import PageContainer from "@/components/layout/PageContainer";
import SaleForm from "@/features/sales/components/SaleForm";
import { useCreateSale } from "@/features/sales/hooks/useCreateSale";

function CreateSalePage() {
  const {createSale,isLoading,error,} = useCreateSale();

  return (
    <PageContainer>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-zinc-100">
            Create Sale
          </h1>

          <p className="mt-2 text-zinc-400">
            Select a product and quantity to record a new sale.
          </p>
        </div>

        <SaleForm
          onSubmit={createSale}
          isLoading={isLoading}
          submitLabel="Create Sale"
          error={error}
        />
      </div>
    </PageContainer>
  );
}

export default CreateSalePage;
