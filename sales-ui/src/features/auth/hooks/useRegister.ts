"use client";

import { useState } from "react";
import { AxiosError } from "axios";
import { AuthService } from "../services/auth.service";
import { RegisterSchemaType } from "../schemas/auth.schema";

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function register(data: RegisterSchemaType) {
    try {
      setIsLoading(true);
      setError(null);

      const response = await AuthService.register(data);

      return response;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{
          message?: string;
        }>;

      const message = axiosError.response?.data
                    ?.message ||"Registration failed";

      setError(message);

      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    register,
    isLoading,
    error,
  };
}