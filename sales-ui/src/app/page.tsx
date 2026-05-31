"use client"

import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/Loading";
import { useEffect } from "react";


export default function Home() {
  const{isAuthenticated,isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!isLoading){
      if(isAuthenticated){
        router.replace("/dashboard")
      }else{
        router.replace("/login")
      }
    }
  },[isLoading,isAuthenticated]);

  if(isLoading)  return <Loading />
  
  return null
}
