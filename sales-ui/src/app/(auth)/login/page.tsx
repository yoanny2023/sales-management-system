"use client"

import PageContainer from '@/components/layout/PageContainer'
import LoginForm from '@/features/auth/components/LoginForm'
import { gsap } from '@/lib/animations/gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function LoginPage() {

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power3.out",
      },
    });

    tl.from(".login-title", {opacity: 0,y: 24,})
      .from(".login-description",{opacity: 0,y: 18,},"-=0.3")
      .from(".login-form-wrapper",{opacity: 0,y: 32,scale: 0.98,},"-=0.15");
  },
  { scope: container }
);

  return (
    <PageContainer
     ref={container}
     className="min-h-screen flex flex-col justify-center items-center">
      <div className="login-hero text-center space-y-3 mb-8">
        <h1 className="login-title text-3xl md:text-4xl font-bold text-white">
        Grow Sales & Manage Products Effortlessly
        </h1>
        <p className="login-description text-zinc-400 text-sm md:text-base max-w-md mx-auto">
          A smart dashboard to organize your stock,monitor transactions, and stay in control of your store.
        </p>
      </div>

      <div className="login-form-wrapper">
        <LoginForm />
      </div>
    </PageContainer>
  )
}

export default LoginPage
