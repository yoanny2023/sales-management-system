"use client";

import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import SaleForm from "@/features/sales/components/SaleForm";
import { useCreateSale } from "@/features/sales/hooks/useCreateSale";
import { IconArrowBack,} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function CreateSalePage() {
  const {createSale,isLoading,error,} = useCreateSale();
  const router = useRouter();

  return (
    <PageContainer>
      <Button
        className="flex gap-2 mb-3"
        onClick={() =>{router.replace("/sales")}}
        >
        <IconArrowBack size={18} stroke={1} />
          Back
      </Button>
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
