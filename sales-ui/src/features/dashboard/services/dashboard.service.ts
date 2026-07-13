import { api } from "@/lib/axios";
import { DashboardResponse, DashboardStats } from "../types/dashboard.types";

export default class DashboardService {
  static async getDashboardStats(): Promise<DashboardStats> {
    const response = await api.get<DashboardResponse>("/dashboard/stats");

    return response.data.stats;
  }
}