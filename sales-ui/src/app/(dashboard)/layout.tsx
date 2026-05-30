"use client"

import PageContainer from "@/components/layout/PageContainer";
import { useAuth } from "@/context/authContext";
import { useEffect } from "react"
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const{isAuthenticated} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!isAuthenticated){
      router.replace("/")
    }
  },[isAuthenticated,router]);

  return (
    <PageContainer>
      {children}
    </PageContainer>
  );
}