"use client"

import SidebarContent from "./SidebarContent";

function Sidebar() {

  return (
    <aside className="fixed left-0 top-0 z-40 hidden md:flex h-screen w-64 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950">
      <SidebarContent />
    </aside>
  )
}

export default Sidebar
