"use client"

import React from 'react';
import Loading from '@/components/ui/Loading';
import { usePublicRoute } from '@/hooks/usePublicRoute';

function AuthLayout({children}:{children: React.ReactNode}) {
  const{isLoading,isAuthenticated} = usePublicRoute()

  if(isLoading) return <Loading />

  if(isAuthenticated) return <Loading />

  return (
    <>
      {children}
    </>
  )
}

export default AuthLayout
