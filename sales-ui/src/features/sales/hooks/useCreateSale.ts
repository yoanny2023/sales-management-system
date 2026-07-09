"use client";

import { AxiosError } from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CreateSaleData } from "../types/sale.types";
import { SaleService } from "../services/sale.service";

export function useCreateSale() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createSale = async (data: CreateSaleData) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await SaleService.createSale(data);

      toast.success(response.message);

      router.push(`/sales/${response.sale.id}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(
          error.response?.data?.message ??
            "Failed to create sale"
        );

        toast.error("Error creating sale");

        return;
      }

      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createSale,
    isLoading,
    error,
  };
}