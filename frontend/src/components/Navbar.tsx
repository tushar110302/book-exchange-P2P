"use client"
import Link from 'next/link'
import React from 'react'

function Navbar() {

    const user = JSON.parse(localStorage.getItem("user") || "{}");
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