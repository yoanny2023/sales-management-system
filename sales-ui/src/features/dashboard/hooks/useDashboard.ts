import { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { DashboardStats } from "../types/dashboard.types";
import DashboardService from "../services/dashboard.service";

export function useDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardStats = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await DashboardService.getDashboardStats();

      setStats(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(
          error.response?.data?.message ??
            "Failed to fetch dashboard statistics."
        );
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardStats();
  }, [fetchDashboardStats]);

  return {
    stats,
    isLoading,
    error,
    refetch: fetchDashboardStats,
  };
}