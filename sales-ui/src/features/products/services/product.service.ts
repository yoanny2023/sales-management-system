import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { GetProductsResponse, Product } from "../types/product.types";

export class ProductService{

  static async getProducts():Promise<Product[]>{
    try {
      const response = await api.get<GetProductsResponse>("/products");

      return response.data.products;

    } catch (error) {
      const axiosError = error as AxiosError<{
          message?: string;
        }>;

      throw new Error(
          axiosError.response?.data?.message || "Failed to fetch products"
      );
    }
  }
}