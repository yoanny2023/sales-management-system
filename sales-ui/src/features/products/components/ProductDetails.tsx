"use client";

import { useRouter } from "next/navigation";
import { useProduct } from "../hooks/useProduct";
import Skeleton from "./Skeleton";
import Button from "@/components/ui/Button";
import { IconArrowBack } from "@tabler/icons-react";
import { formatDate } from "@/utils/formatDate";
import ProductInfoCard from "./ProductInfoCard";

type ProductDetailsProps = {
  id: string;
};

function ProductDetailsPage({id}:ProductDetailsProps) {
  const {product,isLoading,error,} = useProduct(id);
  const router = useRouter()

  if (isLoading) return <Skeleton />

  if (error) return <div>{error}</div>
   
  if (!product){
    return( 
    <div>
      <p className="text-md text-zinc-400">Product not found</p>
      <span className="text-zinc-600">This product may have been deleted or does not exist.</span>
    </div>
    )
  } 
  
  return (
    <div className="space-y-3">
      <h2>Product Details</h2>
      <Button 
        className="flex gap-2"
        onClick={() => {
          router.back()
        }}
      >
        <IconArrowBack size={18} stroke={1} />
        Back
      </Button>
      <h1>Product: <span className="text-amber-500 text-2xl font-semibold">{product.name}</span></h1>
      <p className="text-zinc-500">Created on {formatDate(product.createdAt)}</p>

      <ProductInfoCard
        price={product.price}
        stock={product.stock}
        createdAt={product.createdAt}
      />
    </div>
    
  )
}

export default ProductDetailsPage
