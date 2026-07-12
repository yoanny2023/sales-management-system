import DashboardRepository from "./dashboard.repository.js";

export type DashboardStats = {
  totalRevenue: number;
  totalSales: number;
  totalProducts: number;
  lowStockProducts: number;
};

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
}