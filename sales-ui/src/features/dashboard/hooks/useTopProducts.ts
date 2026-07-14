import { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { TopProduct } from "../types/dashboard.types";
import DashboardService from "../services/dashboard.service";

export function useTopProducts() {
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTopProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await DashboardService.getTopProducts();

      setTopProducts(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(
          error.response?.data?.message ??
            "Failed to fetch top products."
        );
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTopProducts();
  }, [fetchTopProducts]);

  return {
    topProducts,
    isLoading,
    error,
    refetch: fetchTopProducts,
  };
}