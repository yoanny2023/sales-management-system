import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

function AuthLayout({children}:{children: React.ReactNode}) {
  const{isAuthenticated} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(isAuthenticated){
      router.replace("/dashboard")
    }
  },[isAuthenticated,router]);

  return (
    <>
      {children}
    </>
  )
}

export default AuthLayout
