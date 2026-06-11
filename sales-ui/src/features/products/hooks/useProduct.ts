"use client"

import { useCallback, useEffect, useState } from "react";
import { Product } from "../types/product.types";
import { ProductService } from "../services/product.service";

export function useProduct(id:string){
  const[product,setProduct] = useState<Product | null>(null);
  const[isLoading,setIsLoading] = useState(true);
  const[error,setError] = useState<string | null>(null);

  const fetchProduct = useCallback( async () => {
    try {
      setIsLoading(true);
      setError(null)
      const response = await ProductService.getProductById(id);
      setProduct(response);
    } catch (error:unknown) {
       if (error instanceof Error) {
          setError(error.message);
        }
    }finally{
      setIsLoading(false)
    }
  },[id]);

  useEffect(() => {
    if(!id) return;

    fetchProduct();
  },[fetchProduct,id]);

  return {
    product,
    isLoading,
    error,
    refetch:
      fetchProduct,
  };
}