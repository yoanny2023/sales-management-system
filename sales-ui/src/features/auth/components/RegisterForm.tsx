"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerSchema, RegisterSchemaType } from '../schemas/auth.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '../services/auth.service';
import toast from 'react-hot-toast';
import Card from '@/components/ui/Card';
import FormInput from '@/components/forms/FormInput';
import Button from '@/components/ui/Button';
import Link from 'next/link';

function RegisterForm() {
   const [apiError, setApiError] = useState("");
   const router = useRouter();
   const{
       register,
       handleSubmit,
       formState:{errors,isSubmitting},
     } = useForm<RegisterSchemaType>({
       resolver: zodResolver(registerSchema)
     });
 
   async function onSubmit(data:RegisterSchemaType){
     try {
       const response = await AuthService.register(data);
       const{message} = response
       setApiError("");
 
       toast.success(message)
       toast.success("Redirecting to login")
       router.push("/login")
 
     } catch (error:unknown) {
        if (error instanceof Error) {
         setApiError(error.message);
         toast.error(error.message)
       }
     }
   } 
 
   return (
    <Card className="w-full max-w-sm">
       <h2 className="text-2xl font-semibold text-amber-500 text-center">Secure Registration</h2>
    
       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
 
         {apiError && (
           <p className="text-sm text-red-500 text-center">
             {apiError}
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
   )
}

export default RegisterForm
