"use client"
import BookList from '@/components/BookList';
import axios from 'axios';
import React, { useState , useEffect} from 'react'

function myBooks() {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:4000/api/books/getBooksById/${user._id}`);
            // console.log(res)
            setBooks(res.data.books);
        } catch (err) {
            console.error('Error fetching books:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

  return (
    <div className='mt-6'>
        <h2 className="text-3xl font-bold my-6 text-center">My Books</h2>
        {loading ? (
            <p className="text-center">Loading books...</p>
        ) : books.length === 0 ? (
            <p className="text-center text-gray-500">No books found.</p>
        ) : (
            <>
                <BookList books={books} canUpdateStatus />
            </>
        )}
    </div>
  )
}

export default myBooks