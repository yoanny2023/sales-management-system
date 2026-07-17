"use client"

import Button from "@/components/ui/Button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

export default function ProductsHeader() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "power3.out",
        },
      });

      tl.from(".products-header-content", {opacity: 0,y: 24,})
        .from(".products-header-button",{opacity: 0,x: 24,},"-=0.35");
    },
    { scope: container }
  );

  return (
    <section 
      ref={container}
      className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="products-header-content">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          Products
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Manage your inventory and products
        </p>
      </div>

      <Link href="/products/create" className="products-header-button self-start">
        <Button>
          <IconPlus size={18} />
          <span>Add Product</span>
        </Button>
      </Link>
    </section>
  );
}