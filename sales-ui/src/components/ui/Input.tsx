import { cn } from '@/lib/utils'
import React from 'react'

type InputProps = React.ComponentProps<"input">;

function Input({className,...props}: InputProps) {
  return (
    <input
      {...props}
      className={cn("w-full rounded-md px-4 py-2 border border-zinc-800 bg-zinc-900",
        "text-zinc-100 placeholder:text-zinc-500",
        "outline-none transition duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-amber-500/40",
        "autofill:bg-zinc-900",
        className
    )}
    />
  );
}

export default Input
