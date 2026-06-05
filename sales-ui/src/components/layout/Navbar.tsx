"use client"

import { useAuth } from '@/context/authContext';
import { IconMenu3 } from '@tabler/icons-react'
import { usePathname } from 'next/navigation';
import Input from '../ui/Input';

type NavbarProps = {
  onMenuClick: () => void;
};

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/products": "Products",
  "/sales": "Sales",
};

function Navbar({ onMenuClick}: NavbarProps) {
  const{user} = useAuth();
  const pathname = usePathname();
  const currentTitle = pageTitles[pathname] ?? "Dashboard";

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-30 h-16 border-b border-zinc-800 bg-zinc-900/95 px-6 backdrop-blur-md flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden"
        >
          <IconMenu3 stroke={2} className="text-amber-500 cursor-pointer" size={22} />
        </button>

        <div>
          <h1 className="text-sm font-semibold text-zinc-100 md:text-base">
            {currentTitle}
          </h1>

          <p className="hidden text-xs text-zinc-500 md:block">
            Manage your business insights
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Input type="search" placeholder="search" className='w-auto hidden md:block' />
        <div className="flex items-center justify-center font-semibold h-10 w-10 rounded-full text-zinc-950 bg-amber-500
        border border-amber-400/20 shadow-lg shadow-amber-500/10">
          {user?.name?.slice(0,1).toUpperCase()}
        </div>
      </div>
    </header>
  );
}

export default Navbar
