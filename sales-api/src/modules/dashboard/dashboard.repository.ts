import { prisma } from "../../config/prisma.js";
import { LOW_STOCK_THRESHOLD, TopProduct } from "../../types/dashboard.types.js";

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

  static async getTopProducts(): Promise<TopProduct[]> {
  const groupedProducts = await prisma.saleItem.groupBy({
    by: ["productId"],

    _sum: {
      quantity: true,
    },

    orderBy: {
      _sum: {
        quantity: "desc",
      },
    },

    take: 4,
  });

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: groupedProducts.map((product) => product.productId),
      },
    },

    select: {
      id: true,
      name: true,
    },
  });

  return groupedProducts.map((group) => {
    const product = products.find(
      (product) => product.id === group.productId
    );

    return {
      id: group.productId,
      name: product?.name ?? "Unknown Product",
      quantitySold: group._sum.quantity ?? 0,
    };
  });
}
}