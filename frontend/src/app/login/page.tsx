"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { LoginFormData } from '@/types';

function Login() {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, formData);

            // console.log("response",response.data.user); 
            localStorage.setItem("user", JSON.stringify(response.data.user));
            router.push('/dashboard');
            
        } catch (error) {
            console.log("Login error", error);
        }        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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