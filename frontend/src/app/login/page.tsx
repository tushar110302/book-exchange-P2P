"use client"
import Link from 'next/link';
import React, { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  return (
    <div className='w-full h-screen grid place-items-center'>
        <div className="max-w-md mt-10">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full border p-2 rounded" 
                required 
                />

                <input type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                className="w-full border p-2 rounded" 
                required 
                />

                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Login
                </button>
            </form>
            <div className='mt-3 text-center text-lg'>
                <div>
                    If you don&#39;t have an account,
                </div>
                <Link href={'/signup'} className='hover:underline '>
                    Sign Up
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login