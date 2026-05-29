"use client";

import FormInput from '@/components/forms/FormInput';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from '../schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';

function LoginForm() {
    const{
      register,
      handleSubmit,
      formState:{errors,isSubmitting},
    } = useForm<LoginSchemaType>({
      resolver: zodResolver(loginSchema)
    });

  async function onSubmit(data:LoginSchemaType){
    console.log("my data:",data);
    await new Promise((resolve) => setTimeout(resolve,1000)); // simulate api request
    //reset();
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
          error={errors.email?.message}
        />
        <FormInput
          {...register("password")}
          label="Password"
          type="password" 
          id="password" 
          placeholder="Enter your password"
          error={errors.password?.message}
        />
   
        <Button type="submit" className="w-full rounded-full"
        disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Login"}
        </Button>
      </form>
    </Card>
  )
}

export default LoginForm
