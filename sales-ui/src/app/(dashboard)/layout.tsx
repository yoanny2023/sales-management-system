"use client"

import PageContainer from "@/components/layout/PageContainer";
import { useAuth } from "@/context/authContext";
import { useEffect } from "react"
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/Loading";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const{isAuthenticated,isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!isLoading && !isAuthenticated){
      router.replace("/login")
    }
  },[isLoading,isAuthenticated,router]);

  if(isLoading) return <Loading />
  
  if(!isAuthenticated) return <Loading />;
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>    
  );
}