"use client";

import { useEffect, useState } from "react";
import { Product } from "../types/product.types";
import { ProductService } from "../services/product.service";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await ProductService.getProducts();
        setProducts(response);
      } catch (error:unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return {
    products,
    isLoading,
    error,
  };
}