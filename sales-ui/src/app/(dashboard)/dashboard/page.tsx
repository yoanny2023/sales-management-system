import PageContainer from '@/components/layout/PageContainer';
import RecentSalesTable from '@/features/dashboard/components/RecentSalesTable';
import SalesChart from '@/features/dashboard/components/SalesChart';
import StatsCard from '@/features/dashboard/components/StatsCard';
import TopProducts from '@/features/dashboard/components/TopProducts';
import WelcomeSection from '@/features/dashboard/components/WelcomeSection';
import { dashboardStats } from '@/features/dashboard/data/mockDashboard';

function DashboardPage() {

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
