export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  createdAt: string;
  userId: number;
}

export type GetProductsResponse = {
  message: string;
  products: Product[];
};