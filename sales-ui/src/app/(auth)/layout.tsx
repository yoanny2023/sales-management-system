"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import Loading from '@/components/ui/Loading';

function AuthLayout({children}:{children: React.ReactNode}) {
  const{isAuthenticated,isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!isLoading && isAuthenticated){
      router.replace("/dashboard")
    }
  },[isLoading,isAuthenticated,router]);

  if(isLoading) return <Loading />

  if(isAuthenticated) return <Loading />

  return (
    <>
      {children}
    </>
  )
}

export default AuthLayout
