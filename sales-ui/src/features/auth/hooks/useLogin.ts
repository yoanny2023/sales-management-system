"use client";

import { useState } from "react";
import { AxiosError } from "axios";
import { AuthService } from "../services/auth.service";
import { LoginSchemaType } from "../schemas/auth.schema";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(data: LoginSchemaType) {
    try {
      setIsLoading(true);
      setError(null);

      const response = await AuthService.login(data);

      return response;
    } catch (error: unknown) {
      const axiosError =
        error as AxiosError<{
          message?: string;
        }>;

      const message = axiosError.response?.data
                      ?.message || "Login failed";

      setError(message);

      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    login,
    isLoading,
    error,
  };
}