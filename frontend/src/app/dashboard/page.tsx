'use client';
import BookList from '@/components/BookList';
import { Book, User } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    const fetchBooks = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/books/getBooks`);
            // console.log(res)
            setBooks(res.data.books);
        } catch (err) {
            console.error('Error fetching books:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      fetchBooks();
    }, []);

    if(!user){
      return (
        <div>
          User Not Found
        </div>
      )
    }

  return (
    <div className="mt-6">
      
      <h2 className="text-3xl font-bold my-6 text-center">Available Book Listings</h2>
      {loading ? (
        <p className="text-center">Loading books...</p>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-500">No books found.</p>
      ) : (
        <>
          <BookList books={books} />
        </>
      )}
    </div>
  );
}
