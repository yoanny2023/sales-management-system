import PageContainer from '../layout/PageContainer'

function Loading() {
  return (
    <PageContainer className="min-h-screen flex flex-col justify-center items-center">
      <div className="h-10 w-10 rounded-full border-4 border-zinc-700 border-t-amber-500 animate-spin" />
    </PageContainer>
  )
}

export default Loading
