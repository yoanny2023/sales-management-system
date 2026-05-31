import PageContainer from '@/components/layout/PageContainer'
import LoginForm from '@/features/auth/components/LoginForm'

function LoginPage() {

  return (
    <PageContainer className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center space-y-3 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
        Grow Sales & Manage Products Effortlessly
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto">
          A smart dashboard to organize your stock,monitor transactions, and stay in control of your store.
        </p>
      </div>
             
      <LoginForm />
    </PageContainer>
  )
}

export default LoginPage
