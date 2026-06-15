"use client";

import ProductForm from "./ProductForm";
import {useProduct,} from "../hooks/useProduct";
import {useUpdateProduct,} from "../hooks/useUpdateProduct";
import Skeleton from "../../../components/ui/Skeleton";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { IconArrowBack } from "@tabler/icons-react";

type EditFormProps = {
  id: string;
};

function EditProductForm({id,}: EditFormProps) {
  const {product,isLoading:isFetching, error:fetchError,} = useProduct(id);
  const {updateProduct,isLoading,error,} = useUpdateProduct(id);
  const router = useRouter();

  if (isFetching) return <Skeleton />;

  if (fetchError) return <div>{fetchError}</div>
  
  if (!product) return <div>Product not found</div>  

  return (
    <>
      <Button
      className="flex gap-2"
      onClick={() =>{router.replace(`/products/${id}`)}}
      >
      <IconArrowBack size={18} stroke={1} />
        Back
      </Button>
    
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-100">
            Edit Product
          </h1>

          <p className="text-zinc-500">
            Update product information.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <ProductForm
            defaultValues={{
              name: product.name,
              price: product.price,
              stock: product.stock,
            }}
            onSubmit={updateProduct}
            isLoading={isLoading}
            error={error}
            submitLabel="Save Changes"
          />
        </div>
      </div>
    </>
  );
}

export default EditProductForm;