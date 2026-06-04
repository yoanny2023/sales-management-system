import {DashboardStat,SalesChartData,RecentSale} from "../types/dashboard.types";

export const dashboardStats: DashboardStat[] = [
  {
    title: "Revenue",
    value: "$24,500",
    change: "+12.5%",
    description: "vs last month",
  },
  {
    title: "Sales",
    value: "1,248",
    change: "+8.1%",
    description: "transactions",
  },
  {
    title: "Products",
    value: "342",
    change: "+4.2%",
    description: "active products",
  },
  {
    title: "Profit",
    value: "$8,920",
    change: "+18.2%",
    description: "this month",
  },
];

export const salesChartData: SalesChartData[] = [
  { date: "Jan", sales: 1200 },
  { date: "Feb", sales: 1900 },
  { date: "Mar", sales: 1500 },
  { date: "Apr", sales: 2400 },
  { date: "May", sales: 2800 },
  { date: "Jun", sales: 3200 },
];

export const recentSales: RecentSale[] = [
  {
    id: 1,
    customer: "John Doe",
    product: "Nike Air Max",
    amount: 120,
    status: "Completed",
    date: "Jun 02, 2026",
  },
  {
    id: 2,
    customer: "Sarah Smith",
    product: "Adidas Samba",
    amount: 95,
    status: "Pending",
    date: "Jun 01, 2026",
  },
  {
    id: 3,
    customer: "Michael Brown",
    product: "Jordan Retro",
    amount: 180,
    status: "Completed",
    date: "May 30, 2026",
  },
];