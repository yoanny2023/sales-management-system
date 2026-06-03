"use client";

import { cn } from "@/lib/utils";
import SidebarContent from "./SidebarContent";

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileSidebar({ isOpen, onClose,}: MobileSidebarProps) {
  
  return (
    <>
      <div
        onClick={onClose}
        className = {cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      <aside className={cn(
        "fixed left-0 top-0 z-50 h-screen w-64 border-r border-zinc-800 bg-zinc-950 shadow-2xl md:hidden",
        "transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
      >
        <SidebarContent onNavigate={onClose} />
      </aside>
    </>
  );
}

export default MobileSidebar;