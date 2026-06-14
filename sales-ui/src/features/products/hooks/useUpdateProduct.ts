"use client";

import {useState,} from "react";
import { AxiosError,} from "axios";
import {useRouter,} from "next/navigation";
import {ProductService,} from "../services/product.service";
import {ProductFormData,} from "../schemas/product.schema";
import toast from "react-hot-toast";

export function useUpdateProduct(id: string) {
  const router = useRouter();
  const [isLoading,setIsLoading,] = useState(false);
  const [error,setError,] = useState<string | null>(null);

  const updateProduct = async (data: ProductFormData) => {
      try {
        setIsLoading(true);
        setError(null);

        await ProductService.updateProduct(id,data);
        toast.success("Product updated successfully")        
        router.push(`/products/${id}`);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(
            error
              .response
              ?.data
              ?.message ??
              "Failed to update product"
          );
          
          toast.error("Failed to updated product") 

          return;
        }

        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

  return {
    updateProduct,
    isLoading,
    error,
  };
}