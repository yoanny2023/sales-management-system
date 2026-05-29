import React from 'react'
import Input from '../ui/Input'

type FormInputProps = React.ComponentProps<"input"> & {
  error?: string
  label: string
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

function FormInput({label,error,id,...props}: FormInputProps) {
  return (
   <div className="space-y-2">
      <label htmlFor={id} className="text-sm tracking-wide text-zinc-400 cursor-pointer">
        {label}
      </label>
      <Input 
        {...props}
        id={id}
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  )
}

export default FormInput
