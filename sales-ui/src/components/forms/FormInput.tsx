"use client";

import Input from '../ui/Input'
import { useState } from "react";
import {IconEye,IconEyeOff,IconMail,IconLock, IconUser} from "@tabler/icons-react";

type FormInputProps = React.ComponentProps<"input"> & {
  error?: string
  label: string
}

function FormInput({type,label,error,id,...props}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
   <div className="space-y-2">
      <label htmlFor={id} className="text-sm tracking-wide text-zinc-400 cursor-pointer">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500">
          {type === "text" ? (
            <IconUser />
          ) : type === "email" ? (
            <IconMail size={18} />
          ) : isPassword ? (
            <IconLock size={18} />
          ) : null}
        </div>

      <Input 
        {...props}
        id={id}
         type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          className="pl-10 pr-10"
      />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500 hover:text-zinc-300 transition"
          >
            {showPassword ? (<IconEyeOff size={18} />) : (<IconEye size={18} />)}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  )
}

export default FormInput
