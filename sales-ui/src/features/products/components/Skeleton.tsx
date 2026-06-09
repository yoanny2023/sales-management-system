function Skeleton() {

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 border-b border-zinc-800 p-4 animate-pulse"
        >
          <div className="h-4 w-40 rounded bg-zinc-800" />
          <div className="h-4 w-20 rounded bg-zinc-800" />
          <div className="h-4 w-16 rounded bg-zinc-800" />
        </div>
      ))}
    </div>
  );
}

export default Skeleton
