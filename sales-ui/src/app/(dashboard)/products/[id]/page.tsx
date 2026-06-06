import PageContainer from '@/components/layout/PageContainer';

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({params,}: ProductDetailsPageProps) {
  const{id} = await params;

  return (
    <PageContainer>
      <div className="text-zinc-100">
       Product ID:{id}
      </div>  
    </PageContainer>
  );
}