'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// type FormData = {
//   title: string;
//   author: string;
//   genre?: string;
//   location: string;
//   contactEmail: string;
//   contactPhone: string;
//   userId: string;
// };

export default function AddBookPage() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    city: '',
    userId: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user') || '{}');

        if (!user?._id) {
            alert('User not logged in.');
            return;
        }
        const payload = { ...formData, userId: user._id };
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/books/addBook`, payload);
        console.log(res.data.book);
        router.push('/dashboard');
    };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <div className='max-w-xl p-6 border rounded shadow-sm'>
            <h2 className="text-2xl font-bold mb-6 text-center">Add a Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                name="title"
                placeholder="Book Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
                />
                <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
                />
                <input
                type="text"
                name="genre"
                placeholder="Genre (Optional)"
                value={formData.genre}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                />
                <input
                type="text"
                name="city"
                placeholder="City / Location"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
                />
        

                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                Add Book
                </button>
            </form>
        </div>
    </div>
  );
}
