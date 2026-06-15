"use client";

import { useProduct } from "../hooks/useProduct";
import Skeleton from "../../../components/ui/Skeleton";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { IconArrowBack } from "@tabler/icons-react";
import { formatDate } from "@/utils/formatDate";
import ProductInfoCard from "./ProductInfoCard";
import ProductNotFound from "./ProductNotFound";
import ErrorState from "@/components/ui/ErrorState";

type ProductDetailsProps = {
  id: string;
};

function ProductDetails({id}:ProductDetailsProps) {
  const {product,isLoading,error,} = useProduct(id);
  const router = useRouter()

  if (isLoading) return <Skeleton />

  if (error) return <ErrorState error={error} />
   
  if (!product) return <ProductNotFound />
  
  return (
    <div className="space-y-6">
      <Button 
        className="flex gap-2"
        onClick={() => {
          router.replace("/products")
        }}
      >
        <IconArrowBack size={18} stroke={1} />
        Back
      </Button>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">{product.name}</h1>
        <p className="text-sm text-zinc-500">Created on {formatDate(product.createdAt)}</p>
      </div>
      
      <ProductInfoCard
        id={product.id.toString()}
        price={product.price}
        stock={product.stock}
        createdAt={product.createdAt}
      />
    </div>
  )
}

export default ProductDetails