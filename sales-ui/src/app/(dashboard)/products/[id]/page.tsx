import PageContainer from "@/components/layout/PageContainer";
import ProductDetails from "@/features/products/components/ProductDetails";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({params,}: ProductDetailsPageProps) {
  const{id} = await params;

  return (
    <PageContainer>
      <ProductDetails
        id={id}
      />
    </PageContainer>
  );
}