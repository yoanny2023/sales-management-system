"use client"

import { useCallback, useEffect, useState } from "react"
import { Sale } from "../types/sale.types"
import { SaleService } from "../services/sale.service";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export function useSales(){
  const[sales,setSales] = useState<Sale[]>([]);
  const[isLoading,setIsLoading] = useState(false);
  const[error,setError] = useState<string | null>(null);

  const fetchSales = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await SaleService.getSales();
      setSales(response.sales)
      
    } catch (err: unknown) {
       if (err instanceof AxiosError) {
        setError(
          err.response?.data?.message ??
          "Failed to fetch sales"
        );

        toast.error("Error fetching sales");
        return;
      }

        setError("Something went wrong");
      
    } finally{
      setIsLoading(false)
    }
  },[]);

  useEffect(() => {
    fetchSales()
  },[fetchSales]);

  return {
    sales,
    isLoading,
    error, 
    refetch: fetchSales
  }
}