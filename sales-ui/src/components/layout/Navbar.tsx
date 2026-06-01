"use client"

import { useAuth } from '@/context/authContext';
import { IconMenu3 } from '@tabler/icons-react'
import { useRouter } from 'next/navigation';
import Input from '../ui/Input';

function Navbar() {
  const router = useRouter();
  const{logout,user} = useAuth();

  function onMenuClick(){

  }

  return (
   <header className="w-full h-16 px-6 bg-zinc-800 border-b border-zinc-700 flex items-center justify-between">
      {/* <button
        onClick={onMenuClick}
        className="lg:hidden text-zinc-200 cursor-pointer"
      >
        <IconMenu3 stroke={2} className="text-amber-500" size={18} />
      </button> */}

      <span className="font-medium text-sm md:text-md md:text-xl text-zinc-100">
        {`Welcome ${user?.name}`}
      </span>

      <Input type="search" placeholder="search" className='w-auto' />
      <div className="flex items-center justify-center font-medium h-10 w-10 rounded-full text-zinc-950 bg-amber-500">
        {user?.name.toLowerCase().slice(0,1).toUpperCase()}
      </div>
    </header>
  )
}

export default Navbar
