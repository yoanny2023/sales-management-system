"use client"

import { useCallback, useEffect, useState } from "react";
import { Sale } from "../types/sale.types";
import { SaleService } from "../services/sale.service";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export function useSale(id: number) {
  const [sale, setSale] = useState<Sale | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSale = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await SaleService.getSale(id);
      setSale(response.sale);
    } catch (err) {
        if (err instanceof AxiosError) {
          setError(
            err.response?.data?.message ??
            "Failed to fetch sale"
          );

        toast.error("Error fetching sale");
        return;
      }

        setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSale();
  }, [fetchSale]);

  return {
    sale,
    isLoading,
    error,
    refetch: fetchSale,
  };
}