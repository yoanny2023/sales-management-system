"use client"
import { IconEdit, IconTrash } from '@tabler/icons-react'
import Link from 'next/link';

type ActionsProps = {
  id: string;
};

function ProductActions({id}:ActionsProps) {
  return( 
    <div className="flex justify-end gap-3">
      <Link href={`/products/${id}/edit`}>
      <button className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 cursor-pointer transition hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400">
        <IconEdit size={18} />
        Edit Product
      </button>
      </Link>

      <button className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm font-medium text-red-400 cursor-pointer transition hover:bg-red-500/10">
        <IconTrash size={18} />
        Delete
      </button>
    </div>
  )
}

export default ProductActions

