import { api } from "@/lib/axios";
import { CreateSaleData, CreateSaleResponse, GetSaleResponse, GetSalesResponse } from "../types/sale.types";

export class SaleService {
  static async getSales():Promise<GetSalesResponse>{
    const response = await api.get<GetSalesResponse>("/sales")
    return response.data;
  }

  static async getSale(id:number):Promise<GetSaleResponse>{
    const response = await api.get<GetSaleResponse>(`/sales/${id}`)
    return response.data;
  }

  static async createSale(data:CreateSaleData):Promise<CreateSaleResponse>{
   const response = await api.post<CreateSaleResponse>("/sales",data);
   return response.data
  }
}