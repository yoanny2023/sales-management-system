"use client";

import PageContainer from '@/components/layout/PageContainer';
import ErrorState from '@/components/ui/ErrorState';
import Loading from '@/components/ui/Loading';
import RecentSalesTable from '@/features/dashboard/components/RecentSalesTable';
import SalesChart from '@/features/dashboard/components/SalesChart';
import StatsCard from '@/features/dashboard/components/StatsCard';
import TopProducts from '@/features/dashboard/components/TopProducts';
import WelcomeSection from '@/features/dashboard/components/WelcomeSection';
import { useDashboard } from '@/features/dashboard/hooks/useDashboard';
import { DashboardStat } from '@/features/dashboard/types/dashboard.types';

function DashboardPage() {
  const{stats,isLoading,error} = useDashboard();

  const dashboardStats: DashboardStat[] = [
  {
    title: "Revenue",
    value: `$${stats?.totalRevenue.toFixed(2)}`,
    badge: "Total",
    description: "All recorded sales",
  },
  {
    title: "Sales",
    value: `${stats?.totalSales.toString()}`,
    badge: "Completed",
    description: "Transactions",
  },
  {
    title: "Products",
    value: `${stats?.totalProducts.toString()}`,
    badge: "Inventory",
    description: "Available products",
  },
  {
    title: "Low Stock",
    value: `${stats?.lowStockProducts.toString()}`,
    badge: "Alert",
    description: "Products below 3 units",
  },
];

  if (isLoading) return <Loading />

  if (error) return <ErrorState error={error} />

  return (
    <PageContainer className="space-y-6">
      <WelcomeSection />

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatsCard
            key={stat.title}
            stat={stat}
          />
        ))}
      </section>

       <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <SalesChart />
        </div>

        <div className="xl:col-span-4">
          <TopProducts />
        </div>
      </section>
      
      <RecentSalesTable />
    </PageContainer>
  )
}

export default DashboardPage
