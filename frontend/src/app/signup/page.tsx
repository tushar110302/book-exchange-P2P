"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios';
import { SignupFormData } from '@/types';

function Signup() {
    const [formData, setFormData] = useState<SignupFormData>({
        name:'',
        email: '',
        mobile: '',
        password: '',
        role: 'Seeker'
    });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/signup`, formData);
            console.log(response);
            router.push('/login');
        } catch (error) {
            console.log("Signup error", error);
        }
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  return (
    <div className="w-full h-screen grid place-items-center">
        <div className='max-w-md'>
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full border p-2 rounded" 
                required />

                <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full border p-2 rounded" 
                required />

                <input 
                type="tel" 
                name="mobile" 
                placeholder="Mobile Number" 
                value={formData.mobile} 
                onChange={handleChange} 
                className="w-full border p-2 rounded" required />

                <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                className="w-full border p-2 rounded" required />

                <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange} 
                className="w-full border p-2 rounded"
                >
                    <option value="Owner">Owner</option>
                    <option value="Seeker">Seeker</option>
                </select>

                <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 hover:cursor-pointer">
                    Sign Up
                </button>
            </form>
            <div className='mt-3 text-center text-lg'>
                <div>
                    If already have an account,
                </div>
                <Link href={'/login'} className='hover:underline '>
                    Login
                </Link>
            </div>
        </div>
  </div>
  )
}

export default Signup