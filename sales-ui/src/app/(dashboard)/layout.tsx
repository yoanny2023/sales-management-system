"use client"

import { useState } from "react"
import Loading from "@/components/ui/Loading";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import MobileSidebar from "@/components/layout/MobileSidebar";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const{isLoading,isAuthenticated} = useProtectedRoute();

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
      <div className="flex flex-1 flex-col md:ml-64">
        <Navbar 
          onMenuClick={() =>
            setIsSidebarOpen(true)
          } 
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto pt-16">
          {children}
        </main>
      </div>
    </div>    
  );
}