"use client";

import { useParams } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import ErrorState from "@/components/ui/ErrorState";
import Skeleton from "@/components/ui/Skeleton";

import SaleInfoCard from "@/features/sales/components/SaleInfoCard";
import SaleItemsTable from "@/features/sales/components/SaleItemsTable";
import { useSale } from "@/features/sales/hooks/useSale";

function SaleDetailsPage() {
  const params = useParams();

  const saleId = Number(params.id);

  const {sale,isLoading,error,} = useSale(saleId);

  if (isLoading) return <Skeleton />;

  if (error) return <ErrorState error={error} />;

  if (!sale) return null;

  return (
    <PageContainer>
      <div className="space-y-6">
        <SaleInfoCard sale={sale} />

        <SaleItemsTable items={sale.items} />
      </div>
    </PageContainer>
  );
}

export default SaleDetailsPage;