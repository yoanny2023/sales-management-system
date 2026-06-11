"use client"
import { IconEdit, IconTrash } from '@tabler/icons-react'

function ProductActions() {
  return (
    <div className="flex justify-end gap-2">
      <button className="rounded-xl border border-zinc-700 p-2 text-zinc-400 transition-all cursor-pointer hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400">
        <IconEdit size={18} />
      </button>
    
      <button className="rounded-xl border border-zinc-700 p-2 text-zinc-400 transition-all cursor-pointer hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400">
        <IconTrash size={18} />
      </button>
    </div>
  )
}

export default ProductActions
