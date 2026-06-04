import { api } from "@/lib/axios";
import {AxiosError} from "axios";
import {LoginResponse, RegisterResponse } from "../types/auth.types";
import { LoginSchemaType, RegisterSchemaType } from "../schemas/auth.schema";

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

  static async register(data:RegisterSchemaType):Promise<RegisterResponse>{
    try {
      const response = await api.post<RegisterResponse>("/auth/register",data);

      return response.data;
      
    } catch (error) {

       const axiosError = error as AxiosError<{
          message?: string;
        }>;

      throw new Error(
          axiosError.response?.data?.message || "Registration failed"
      );
    }
  }
}