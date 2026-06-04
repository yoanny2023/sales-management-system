import PageContainer from '@/components/layout/PageContainer'
import RegisterForm from '@/features/auth/components/RegisterForm'

function page() {
  return (
    <PageContainer className="min-h-screen flex flex-col justify-center items-center">            
      <RegisterForm />
    </PageContainer>
  )
}

export default page
