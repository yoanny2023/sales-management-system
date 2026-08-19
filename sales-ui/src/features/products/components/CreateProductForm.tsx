"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import ProductForm from "./ProductForm";
import {useCreateProduct,} from "../hooks/useCreateProduct";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { IconArrowBack } from "@tabler/icons-react";

function CreateProductForm() {
  const {createProduct,isLoading,error} = useCreateProduct();
  const router = useRouter();

   const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.55,
          ease: "power3.out",
        },
      });

      tl.from(".back-button", {
        opacity: 0,
        x: -30,
      })
        .from(
          ".page-header",
          {
            opacity: 0,
            y: 24,
          },
          "-=0.25"
        )
        .from(
          ".form-card",
          {
            opacity: 0,
            y: 30,
            scale: 0.98,
          },
          "-=0.2"
        );
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <Button
      className="back-button flex gap-2"
      onClick={() =>{router.replace("/products")}}
      >
      <IconArrowBack size={18} stroke={1} />
        Back
      </Button>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="page-header">
          <h1 className="mt-3 text-3xl font-semibold text-zinc-100">
            Create Product
          </h1>

          <p className="text-zinc-500">
            Add a new product
            to inventory.
          </p>
        </div>

        <div className="form-card rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <ProductForm
            onSubmit={createProduct}
            isLoading={isLoading}
            error={error}
            submitLabel="Create Product"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateProductForm;