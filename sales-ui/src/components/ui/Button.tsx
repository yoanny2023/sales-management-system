import { cn } from '@/lib/utils'
import React from 'react'

type ButtonProps = React.ComponentProps<"button"> & {
  loading?: boolean
}

function Button({children,className,loading,disabled,...props}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={cn("px-4 py-2 rounded-md bg-amber-500 text-zinc-900",
        "hover:bg-amber-600 transition-colors duration-300 cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
    )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button
