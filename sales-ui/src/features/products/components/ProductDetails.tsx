"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
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
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);

useGSAP(
  () => {
    if (!container.current) return;

    gsap.set([".page-button",".page-header",".page-table",],
      {
        clearProps: "all",
      }
    );

    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power2.out",
      },
    });

    tl.from(".page-button", {
      opacity: 0,
      x: -20,
    })
      .from(
        ".page-header",
        {
          opacity: 0,
          y: 20,
        },
        "-=0.3"
      )
      .from(
        ".page-table",
        {
          opacity: 0,
          y: 20,
        },
        "-=0.25"
      );
  },
  {
    scope: container,
  }
);

  if (isLoading) return <Skeleton />

  if (error) return <ErrorState error={error} />
   
  if (!product) return <ProductNotFound />
  
  return (
    <div
      ref={container}
      className="space-y-6">
      <Button 
        className="page-button flex gap-2"
        onClick={() => {
          router.replace("/products")
        }}
      >
        <IconArrowBack size={18} stroke={1} />
        Back
      </Button>
      <div className="page-header space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">{product.name}</h1>
        <p className="text-sm text-zinc-500">Created on {formatDate(product.createdAt)}</p>
      </div>

      <section className="page-table">
        <ProductInfoCard
          id={product.id.toString()}
          price={product.price}
          stock={product.stock}
          createdAt={product.createdAt}
        />
      </section>
    </div>
  )
}

export default ProductDetails