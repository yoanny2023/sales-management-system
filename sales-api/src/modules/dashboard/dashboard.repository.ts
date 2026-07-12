import { prisma } from "../../config/prisma.js";

const LOW_STOCK_THRESHOLD = 3;

export default class DashboardRepository {
  
  static async getTotalRevenue(): Promise<number> {
    const result = await prisma.sale.aggregate({
      _sum: {
        total: true,
      },
    });

    return result._sum.total ?? 0;
  }

  static async getTotalSales(): Promise<number> {
    return prisma.sale.count();
  }

  static async getTotalProducts(): Promise<number> {
    return prisma.product.count();
  }

  static async getLowStockProducts(): Promise<number> {
    return prisma.product.count({
      where: {
        stock: {
          lt: LOW_STOCK_THRESHOLD,
        },
      },
    });
  }
}