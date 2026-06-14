import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { CreateProductResponse, GetProductResponse, GetProductsResponse, Product } from "../types/product.types";
import { ProductFormData } from "../schemas/product.schema";

export class ProductService{

  static async getProductById(id:string):Promise<Product>{
    const response = await api.get<GetProductResponse>(`/products/${id}`);

    return response.data.product
  }

  static async getProducts():Promise<Product[]>{
    try {
      const response = await api.get<GetProductsResponse>("/products");

      return response.data.products;

    } catch (error:unknown) {
      const axiosError = error as AxiosError<{
          message?: string;
        }>;

      throw new Error(
          axiosError.response?.data?.message || "Failed to fetch products"
      );
    }
  }

  static async createProduct(data: ProductFormData):Promise<Product>{
    const response = await api.post<CreateProductResponse>("/products",data);
    return response.data.product
  }
}
