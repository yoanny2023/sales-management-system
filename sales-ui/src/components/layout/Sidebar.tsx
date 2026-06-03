"use client"

import SidebarContent from "./SidebarContent";

function Sidebar() {

  return (
    <aside className="hidden md:flex h-screen w-64 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950 px-4 py-6">
      <SidebarContent />
    </aside>
  )
}

export default Sidebar
