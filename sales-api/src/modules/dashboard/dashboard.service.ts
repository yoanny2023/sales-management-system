import { DashboardStats, TopProduct } from "../../types/dashboard.types.js";
import DashboardRepository from "./dashboard.repository.js";

export default class DashboardService {
  static async getDashboardStats(): Promise<DashboardStats> {
    const [
      totalRevenue,
      totalSales,
      totalProducts,
      lowStockProducts,
    ] = await Promise.all([
      DashboardRepository.getTotalRevenue(),
      DashboardRepository.getTotalSales(),
      DashboardRepository.getTotalProducts(),
      DashboardRepository.getLowStockProducts(),
    ]);

    return {
      totalRevenue,
      totalSales,
      totalProducts,
      lowStockProducts,
    };
  }

  static async getTopProducts(): Promise<TopProduct[]> {
    return await DashboardRepository.getTopProducts();
  }
}