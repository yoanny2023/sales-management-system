"use client"

import { useAuth } from '@/context/authContext'

function DashboardPage() {
 const{user,logout} = useAuth();

  return (
    <>
       <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-4">
        Welcome {user?.name}
      </p>

      <button
        onClick={logout}
        className="mt-4 rounded-lg bg-red-500 px-4 py-2"
      >
        Logout
      </button>
    </>
  )
}

export default DashboardPage
