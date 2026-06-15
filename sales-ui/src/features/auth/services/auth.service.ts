import { api } from "@/lib/axios";
import {LoginResponse, RegisterResponse } from "../types/auth.types";
import { LoginSchemaType, RegisterSchemaType } from "../schemas/auth.schema";

export class AuthService{

  static async login(data:LoginSchemaType):Promise<LoginResponse>{
    const response = await api.post<LoginResponse>("/auth/login",data);

    return response.data;
  }

  static async register(data:RegisterSchemaType):Promise<RegisterResponse>{
    const response = await api.post<RegisterResponse>("/auth/register",data);

    return response.data;
  }
}
