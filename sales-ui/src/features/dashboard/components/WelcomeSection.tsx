"use client"

import { useAuth } from "@/context/authContext";
import { getCurrentMonthYear } from "@/utils/formatDate";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

export default function WelcomeSection() {
  const{user} = useAuth();
  const currentHour = new Date().getHours();
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power3.out",
      },
    });

    tl.from(".welcome-badge", {opacity: 0,y: 20,})
      .from(".welcome-title",{opacity: 0,y: 24,},"-=0.35")
      .from(".welcome-description",{opacity: 0,y: 20,},"-=0.35")
      .from(".welcome-date",{opacity: 0,x: 30,},"-=0.4");
  },
  { scope: container }
);

  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <section 
      ref={container}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm md:p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-transparent" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="welcome-badge mb-4 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1">
            <span className="text-xs font-medium text-amber-400">
              Dashboard Overview
            </span>
          </div>

          <h1 className="welcome-title text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            {greeting}, {user?.name} 👋
          </h1>

          <p className="welcome-description mt-3 max-w-xl text-sm leading-6 text-zinc-400 md:text-base">
            Here’s an overview of your business performance, sales,
            revenue, and recent activity.
          </p>
        </div>

        <div className="welcome-date flex w-fit items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/50 px-4 py-3">
          <div>
            <p className="text-xs text-zinc-500">Current Month</p>

            <p className="font-medium text-zinc-100">
              {getCurrentMonthYear()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}