"use client";

import SidebarContent from "./SidebarContent";

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileSidebar({ isOpen, onClose,}: MobileSidebarProps) {
  
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 md:hidden"
      />

      <aside className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-zinc-800 bg-zinc-950 md:hidden">
        <SidebarContent onNavigate={onClose} />
      </aside>
    </>
  );
}

export default MobileSidebar;