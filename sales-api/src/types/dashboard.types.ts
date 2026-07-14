export const LOW_STOCK_THRESHOLD = 3;

export type DashboardStats = {
  totalRevenue: number;
  totalSales: number;
  totalProducts: number;
  lowStockProducts: number;
};

export type TopProduct = {
  id: number;
  name: string;
  quantitySold: number;
};