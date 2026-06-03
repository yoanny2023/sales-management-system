"use client"

import { useAuth } from "@/context/authContext";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/Loading";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import MobileSidebar from "@/components/layout/MobileSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() =>
          setIsSidebarOpen(false)
        }
      />
      <div className="flex flex-1 flex-col">
        <Navbar 
          onMenuClick={() =>
            setIsSidebarOpen(true)
          } 
        />

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>    
  );
}