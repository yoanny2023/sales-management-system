"use client"

import { usePathname, useRouter } from "next/navigation"
import { sidebarLinks } from "@/constants/sidebarLinks";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import toast from "react-hot-toast";

type SidebarProps = {
  onClose?: () => void;
};

function Sidebar({onClose}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
    router.replace("/login");
    toast.success("Logging out...")
  }

  return (
    <aside className="hidden md:flex h-screen w-64 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950 px-4 py-6">

      <div className="mb-10 flex items-center gap-2 px-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-bold text-zinc-950">
          F
        </div>

        <div>
          <h2 className="font-semibold text-zinc-100">
            FlexSales
          </h2>
          <p className="text-xs text-zinc-500">
            Finance Dashboard
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-8">
        {sidebarLinks.map( (section) => (
          <div key={section.section}>
            
            <h3 className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              {section.section}
            </h3>

            <div className="flex flex-col gap-1">
              {section.items.map((item) => {
                const isActive = item.href && pathname === item.href;

                if (item.action === "logout") {
                  return (
                    <button
                      key={item.label}
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-400 cursor-pointer transition-all duration-200 hover:bg-zinc-900 hover:text-red-500"
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
                      isActive
                        ? "bg-zinc-800 text-amber-400"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    )}
                  >
                    <item.icon size={18} />

                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
