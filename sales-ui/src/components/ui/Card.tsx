import { cn } from '@/lib/utils'
import React from 'react'

type CardProps = React.ComponentProps<"div"> 

function Card({children,className,...props}:CardProps) {
  return (
    <div
    {...props} 
    className={cn("rounded-2xl border border-zinc-800/80",
      "p-5 md:p-6 text-zinc-100",
      "bg-zinc-900/80 backdrop-blur-sm",
      "shadow-lg shadow-black/20",
      "hover:-translate-y-1 hover:border-amber-500/20",
      "hover:shadow-2xl hover:shadow-amber-500/5",
      "transition-all duration-300",
      className
    )}>
      {children}
    </div>
  )
}

export default Card
