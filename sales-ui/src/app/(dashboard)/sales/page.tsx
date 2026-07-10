"use client";

import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import { useSales } from "@/features/sales/hooks/useSales";
import SalesTable from "@/features/sales/components/SalesTable";

function SalesPage() {
  const {sales,isLoading,error,} = useSales();

  return (
    <PageContainer>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-100">
              Sales
            </h1>

            <p className="mt-2 text-zinc-400">
              Manage and view your sales.
            </p>
          </div>

          <Link href="/sales/create">
            <Button>
              Create Sale
            </Button>
          </Link>
        </div>

        <SalesTable
          sales={sales}
          totalSales={sales.length}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </PageContainer>
  );
}

export default SalesPage;