"use client"

import Button from '@/components/ui/Button'
import { useRouter } from "next/navigation";

function ProductNotFound() {
 const router = useRouter();

  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-center">
      <h2 className="text-xl font-semibold text-zinc-100">
        Product not found
      </h2>
    
      <p className="mt-2 text-zinc-500">
        This product may have been deleted
        or does not exist.
      </p>
    
      <Button
        className="mt-5"
        onClick={() => router.push("/products")}
      >
        Back to products
      </Button>
    </div>
  )
}

export default ProductNotFound
