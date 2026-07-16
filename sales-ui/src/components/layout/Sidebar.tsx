"use client"

import SidebarContent from "./SidebarContent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";

function Sidebar() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(container.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

    return (
    <aside
      ref={container}
      className="fixed left-0 top-0 z-40 hidden md:flex h-screen w-64 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950">
      <SidebarContent />
    </aside>
  )
}

export default Sidebar
