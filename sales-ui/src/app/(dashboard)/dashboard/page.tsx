import PageContainer from '@/components/layout/PageContainer';
import StatsCard from '@/features/dashboard/components/StatsCard';
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
    </PageContainer>
  )
}

export default DashboardPage
