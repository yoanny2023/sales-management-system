"use client";

import { useParams, useRouter } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import ErrorState from "@/components/ui/ErrorState";
import Skeleton from "@/components/ui/Skeleton";

import SaleInfoCard from "@/features/sales/components/SaleInfoCard";
import SaleItemsTable from "@/features/sales/components/SaleItemsTable";
import { useSale } from "@/features/sales/hooks/useSale";
import Button from "@/components/ui/Button";
import { IconArrowBack } from "@tabler/icons-react";

function SaleDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const saleId = Number(params.id);

  const {sale,isLoading,error,} = useSale(saleId);

  if (isLoading) return <Skeleton />;

  if (error) return <ErrorState error={error} />;

  if (!sale) return null;

  return (
    <PageContainer>
      <Button className="mb-3 flex gap-2"
        onClick={() => {
          router.replace("/sales")
        }}
      >
        <IconArrowBack size={18} stroke={1} />
        Back
      </Button>
      <div className="space-y-6">
        <SaleInfoCard sale={sale} />

        <SaleItemsTable items={sale.items} />
      </div>
    </PageContainer>
  );
}

export default SaleDetailsPage;