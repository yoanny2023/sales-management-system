"use client"

import { useRouter } from 'next/navigation';
import { registerSchema, RegisterSchemaType } from '../schemas/auth.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Card from '@/components/ui/Card';
import FormInput from '@/components/forms/FormInput';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useRegister } from '../hooks/useRegister';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

function RegisterForm() {
   const router = useRouter();
   const{error,register:apiRegister} = useRegister();
   const container = useRef<HTMLDivElement>(null);

   const{
       register,
       handleSubmit,
       formState:{errors,isSubmitting},
     } = useForm<RegisterSchemaType>({
       resolver: zodResolver(registerSchema)
     });
 
   async function onSubmit(data:RegisterSchemaType){
     try {
       const response = await apiRegister(data);
       const{message} = response
 
       toast.success(message)
       toast.success("Redirecting to login")
       router.push("/login")
 
     } catch (error:unknown) {
        toast.error(error instanceof Error ? error.message : "Registration Failed");
     }
   } 

   useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power3.out",
      },
    });

    tl.from(".register-card", {opacity: 0,y: 24,scale: 0.98,})
      .from(".register-title",{opacity: 0,y: 16,},"-=0.3")
      .from(".register-form > *",{opacity: 0,y: 16,stagger: 0.08,},"-=0.2");
  },
  { scope: container }
);
 
   return (
    <div ref={container}>
      <Card className="register-card w-full max-w-sm">
        <h2 className="register-title text-2xl font-semibold text-amber-500 text-center">Secure Registration</h2>
      
        <form onSubmit={handleSubmit(onSubmit)} className="register-form space-y-4">
          <FormInput
            {...register("name")}
            label="Name"
            type="text" 
            id="name" 
            placeholder="Enter your name"
            autoComplete="name"
            error={errors.name?.message}
          />
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
  
          {error && (
            <p className="text-sm text-red-500 text-center">
              {error}
            </p>
          )}
      
          <Button type="submit" className="w-full rounded-full"
          disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
              <p className="text-center text-sm text-zinc-400 mt-4">
              Already have an account?{" "}
              <Link  
                href="/login"
                className="text-amber-400 hover:text-amber-500 font-medium"
                onClick={()=>{
                  toast.success("redirecting to login...")
                }}  
              >
                Login
              </Link>
            </p>
        </form>
      </Card>
    </div>
   )
}

export default RegisterForm
