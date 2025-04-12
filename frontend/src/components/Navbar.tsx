"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { User } from '@/types';

function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className='flex justify-end'>
        <Link href={'/dashboard'} className='text-white mr-4 p-2 outline rounded-md'>
          Dashboard
        </Link>
        {
          user?.role === "Owner" && (
            <Link href={'/dashboard/addBook'} className='text-white mr-4 p-2 outline rounded-md'>
              Add Book
            </Link>
          )
        }
        {
          user?.role === "Owner" && (
            <Link href={'/dashboard/myBooks'} className='text-white mr-4 p-2 outline rounded-md'>
              My Books
            </Link>
          )
        }
        <Link href={'/login'} className='text-white p-2 outline rounded-md'>
          Login
        </Link>
      </nav>
  )
}

export default Navbar