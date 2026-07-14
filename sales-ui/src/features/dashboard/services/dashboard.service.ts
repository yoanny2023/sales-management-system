import { api } from "@/lib/axios";
import { DashboardResponse, DashboardStats, TopProduct, TopProductsResponse } from "../types/dashboard.types";

export default class DashboardService {
  static async getDashboardStats(): Promise<DashboardStats> {
    const response = await api.get<DashboardResponse>("/dashboard/stats");

    return response.data.stats;
  }

  static async getTopProducts(): Promise<TopProduct[]> {
  const response = await api.get<TopProductsResponse>("/dashboard/top-products");

  return response.data.topProducts;
}
}