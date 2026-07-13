export interface DashboardStat {
  title: string;
  value: string;
  badge: string;
  description: string;
}

export interface SalesChartData {
  date: string;
  sales: number;
}

export interface RecentSale {
  id: number;
  customer: string;
  product: string;
  amount: number;
  status: "Completed" | "Pending" | "Refunded";
  date: string;
}

export type DashboardStats = {
  totalRevenue: number;
  totalSales: number;
  totalProducts: number;
  lowStockProducts: number;
};

export type DashboardResponse = {
  message: string;
  stats: DashboardStats;
};