import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { GetProductResponse, GetProductsResponse, Product } from "../types/product.types";

export class ProductService{

  static async getProductById(id:string):Promise<Product>{

    try {
      const response = await api.get<GetProductResponse>(`/products/${id}`);
      return response.data.product
      
    } catch (error:unknown) {
      const axiosError = error as AxiosError<{
          message?: string;
        }>;

      throw new Error(
        axiosError.response?.data?.message || "Failed to fetch product"
      );
    }
  }

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