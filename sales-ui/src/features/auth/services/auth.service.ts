import { api } from "@/lib/axios";
import {AxiosError} from "axios";
import { LoginPayload, LoginResponse } from "../types/auth.types";

export class AuthService{

  static async login(payload:LoginPayload):Promise<LoginResponse>{
    try {
      const response = await api.post<LoginResponse>("/auth/login",payload);
      return response.data;
      
    } catch (error) {

       const axiosError = error as AxiosError<{
          message?: string;
        }>;

      throw new Error(
          axiosError.response?.data?.message ??
          "Login failed"
      );
    }
  }
}