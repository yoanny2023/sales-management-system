"use client";

import FormInput from '@/components/forms/FormInput';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from '../schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { AuthService } from '../services/auth.service';

function LoginForm() {
  const [apiError, setApiError] = useState("");
  const{
      register,
      handleSubmit,
      formState:{errors,isSubmitting},
    } = useForm<LoginSchemaType>({
      resolver: zodResolver(loginSchema)
    });

  async function onSubmit(data:LoginSchemaType){
    try {
      const response = await AuthService.login(data)
      setApiError("");
      console.log(response);

      alert(`${response.message}`);
    } catch (error:unknown) {
       if (error instanceof Error) {
        setApiError(error.message);
      }
    }
  } 

  return (
   <Card className="w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-amber-500 text-center">Secure Login</h2>
   
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          {...register("email")}
          label="Email"
          type="email" 
          id="email" 
          placeholder="Enter your email"
          autoComplete="email"
          error={errors.email?.message}
        />
        <FormInput
          {...register("password")}
          label="Password"
          type="password" 
          id="password" 
          placeholder="Enter your password"
          autoComplete="current-password"
          error={errors.password?.message}
        />

        {apiError && (
          <p className="text-sm text-red-500 text-center">
            {apiError}
          </p>
        )}
   
        <Button type="submit" className="w-full rounded-full"
        disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Login"}
        </Button>
           <p className="text-center text-sm text-zinc-400 mt-4">
            Don’t have an account yet?{" "}
            <Link  
              href="/auth/register"
              className="text-amber-400 hover:text-amber-500 font-medium"
             /*  onClick={()=>{
                toast.success("redirecting to register page")
              }}  */ 
            >
              Sign up
            </Link>
          </p>
      </form>
    </Card>
  )
}

export default LoginForm
