import PageContainer from "@/components/layout/PageContainer";
import ProductsHeader from "@/features/products/components/ProductsHeader";
import ProductFilters from "@/features/products/components/ProductFilters";

export default function ProductsPage() {
  return (
    <PageContainer className="space-y-6" >
      <ProductsHeader />
      <ProductFilters />
    </PageContainer>
  );
}