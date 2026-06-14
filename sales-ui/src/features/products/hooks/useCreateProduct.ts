"use client";

import { AxiosError,} from "axios";
import {useState,} from "react";
import {useRouter,} from "next/navigation";
import {ProductService,} from "../services/product.service";
import { ProductFormData,} from "../schemas/product.schema";
import toast from "react-hot-toast";

export function useCreateProduct() {
  const router = useRouter();
  const [isLoading,setIsLoading,] = useState(false);
  const [error,setError,] = useState<string | null>(null);

  const createProduct = async (data:ProductFormData) => {
      try {
        setIsLoading(true);
        setError(null);

        const product = await ProductService.createProduct(data);
        router.push(`/products/${product.id}`);
        toast.success("Product created successfully")
      }catch(error){
         if ( error instanceof AxiosError ) {
          setError(
            error
              .response
              ?.data
              ?.message ??
              "Failed to create product"
          );
          toast.error("Error creating a product")

          return;
        }

        setError(
          "Something went wrong"
        );
      } finally {
        setIsLoading(false);
      }
    };

  return {
    createProduct,
    isLoading,
    error
  };
}