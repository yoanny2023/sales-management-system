export interface DashboardStat {
  title: string;
  value: string;
  change: string;
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