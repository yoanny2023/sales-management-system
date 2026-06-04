"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export function usePublicRoute() {
  const {isAuthenticated,isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  },[isLoading, isAuthenticated, router]);

  return {
    isAuthenticated,
    isLoading,
  };
}