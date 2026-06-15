"use client"

import { useState } from "react";
import { ProductService } from "../services/product.service";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useDeleteProduct(id:string){
  const[isLoading,setIsLoading] = useState(false);
  const[error,setError] = useState<string | null>(null);
  const router = useRouter();

  const deleteProduct = async () => {
    try {
    setIsLoading(true);
    setError(null);

     await ProductService.deleteProduct(id);
     toast.success("Product successfully deleted");
     router.replace("/products");

  } catch (error:unknown) {
    if(error instanceof AxiosError){
      setError(
        error.response?.data.message ?? "Failed to delete product"
      );

      toast.error("Failed to updated product") 
      return
    }
      setError("Something went wrong");

  }finally{
    setIsLoading(false)
  }
  }

  return {
    deleteProduct,
    isLoading,
    error
  }
}