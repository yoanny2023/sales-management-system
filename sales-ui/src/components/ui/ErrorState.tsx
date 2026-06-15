type ErrorStateProps = {
  error: string
}

function ErrorState({error}:ErrorStateProps) {
  return (
    <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
        <p className="text-sm text-red-400">
          {error}
        </p>
    </section>
  )
}

export default ErrorState
