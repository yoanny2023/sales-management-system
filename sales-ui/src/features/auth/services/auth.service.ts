import { api } from "@/lib/axios";
import {AxiosError} from "axios";
import {LoginResponse } from "../types/auth.types";
import { LoginSchemaType } from "../schemas/auth.schema";

export class AuthService{

  static async login(data:LoginSchemaType):Promise<LoginResponse>{
    try {
      const response = await api.post<LoginResponse>("/auth/login",data);

      return response.data;
      
    } catch (error) {

       const axiosError = error as AxiosError<{
          message?: string;
        }>;

      throw new Error(
          axiosError.response?.data?.message || "Login failed"
      );
    }
  }
}