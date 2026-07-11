export type SaleItem = {
  quantity: number;
  unitPrice: number;
  product: {
    id: number;
    name: string;
  };
};

export type Sale = {
  id: number;
  total: number;
  createdAt: string;
  items: SaleItem[];
};

export type GetSalesResponse = {
  message: string;
  sales: Sale[];
};

export type GetSaleResponse = {
  message: string;
  sale: Sale;
};

export type CreateSaleData = {
  productId: number;
  quantity: number;
};

export type CreateSaleResponse = {
  message: string;
  sale: Sale;
};

export type SalesTableProps = {
  sales: Sale[];
  totalSales: number;
  isLoading: boolean;
  error: string | null;
};

export type DateFilter =
  | "all"
  | "today"
  | "this-week"
  | "this-month";

export type SaleSortOption =
  | "newest"
  | "oldest"
  | "total-asc"
  | "total-desc";