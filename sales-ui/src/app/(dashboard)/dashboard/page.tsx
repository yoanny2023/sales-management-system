"use client"

import PageContainer from '@/components/layout/PageContainer';
import { useAuth } from '@/context/authContext'

function DashboardPage() {
 const{user,logout} = useAuth();

  return (
    <PageContainer>
       <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-4">
        Welcome {user?.name}
      </p>
    </PageContainer>
  )
}

export default DashboardPage
