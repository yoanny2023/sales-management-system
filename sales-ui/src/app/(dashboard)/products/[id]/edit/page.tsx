import PageContainer from "@/components/layout/PageContainer";
import EditProductForm
from "@/features/products/components/EditProductForm";

type Props = {
  params:
    Promise<{
      id: string;
    }>;
};

export default async function EditProductPage({params,}: Props) {
  const {id,} = await params;

  return (
    <PageContainer>      
      <EditProductForm
        id={id}
      />
    </PageContainer>
  );
}
