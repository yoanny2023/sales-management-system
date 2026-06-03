"use client"

import { useAuth } from '@/context/authContext';
import { IconMenu3 } from '@tabler/icons-react'
import { usePathname } from 'next/navigation';
import Input from '../ui/Input';

type NavbarProps = {
  onMenuClick: () => void;
};

function Navbar({ onMenuClick}: NavbarProps) {
  const{user} = useAuth();
  const pathname = usePathname();

  return (
    <header className="w-full h-16 px-6 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden"
        >
          <IconMenu3 stroke={2} className="text-amber-500 cursor-pointer" size={22} />
        </button>

        <h1 className="font-medium text-sm md:text-md text-amber-500">
          {pathname.slice(1).toUpperCase()}
        </h1>
        
      </div>

      <div className="flex gap-3">
        <Input type="search" placeholder="search" className='w-auto hidden md:block' />
        <div className="flex items-center justify-center font-semibold h-10 w-10 rounded-full text-zinc-950 bg-amber-500">
          {user?.name?.slice(0,1).toUpperCase()}
        </div>
      </div>
    </header>
  );
}

export default Navbar
