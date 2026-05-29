"use client"

import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { loginSchema, LoginSchemaType } from "@/features/auth/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Home() {
  const{
    register,
    handleSubmit,
    formState:{errors,isSubmitting},
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });

  async function onSubmit(data:LoginSchemaType){
    console.log("my data:",data);
    await new Promise((resolve) => setTimeout(resolve,1000)); // simulate api request
    reset();
  }

  return (
    <PageContainer className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center space-y-3 mb-8">
         <h1 className="text-3xl md:text-4xl font-bold text-white">
        Grow Sales & Manage Products Effortlessly
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto">
        A smart dashboard to organize your stock,monitor transactions, and stay in control of your store.
      </p>
      </div>
       
      <Card className="w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-amber-500 text-center">Secure Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm tracking-wide text-zinc-400 cursor-pointer">
              Email
            </label>
            <Input 
              {...register("email")}
              type="email" 
              id="email" 
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2"> 
            <label htmlFor="password" className="text-sm tracking-wide text-zinc-400 cursor-pointer">
              Password
            </label>
            <Input
              {...register("password")}
              type="password" 
              id="password"  
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full rounded-full"
          disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </Button>
        </form>
      </Card>
    </PageContainer> 
  );
}
