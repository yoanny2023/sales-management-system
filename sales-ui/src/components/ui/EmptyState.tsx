type EmptyStateProps = {
  title: string
  description: string
 }

function EmptyState({title,description}:EmptyStateProps) {
  return (
    <section className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/40 p-10 text-center">
        <h3 className="text-lg font-semibold text-zinc-100">
          {title}
        </h3>

        <p className="mt-2 max-w-sm text-sm text-zinc-500">
          {description}
        </p>
      </section>
  )
}

export default EmptyState
