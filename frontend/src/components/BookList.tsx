import axios from 'axios';
import React, { useState } from 'react'
import EditBookModal from './EditModal';
import { Book } from '@/types';

function BookList({books, canUpdateStatus=false}: {books: Book[], canUpdateStatus?: boolean}) {
    const [bookList, setBookList] = useState<Book[]>(books);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const handleStatusToggle = async (bookId: string, currentStatus: string) => {

        const newStatus = currentStatus === 'Available' ? 'Rented' : 'Available';
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/books/updateStatus/${bookId}`, 
                { status: newStatus});

            console.log(res);
            setBookList((prevBooks: Book[]) =>
                prevBooks.map((book: Book) =>
                  book._id === bookId ? { ...book, status: newStatus } : book
                )
              );
        } catch (err) {
            console.error('Error updating status:', err);
        }
    }

    const handleEdit = (book: Book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    }

    const handleUpdate = (updatedBook: Book) => {
        setBookList((prevBooks: Book []) =>
          prevBooks.map((book: Book) =>
            book._id === updatedBook._id ? updatedBook : book
          )
        );
    }

    const handleDelete = async (bookId: string) => {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/books/deleteBook/${bookId}`);
            setBookList((prevBooks: Book[]) => prevBooks.filter((book: Book) => book._id !== bookId));
        } catch (err) {
            console.error('Error deleting book:', err);
        }
    }

  return (
    <>
    <div className=' w-[100%] mx-auto   text-gray-400 ' >
        <div className={` ${canUpdateStatus ? 'w-[90%]' : 'w-[94%]'} flex justify-between py-4 text-center rounded-lg bg-zinc-900`}>
            <div className='w-1/6 border-r border-slate-300 flex items-center justify-center'>Title</div>
            <div className='w-1/6 border-r border-slate-300 flex items-center justify-center'>Author</div>
            <div className='w-1/6 border-r border-slate-300 flex items-center justify-center'>Location</div>
            <div className='w-1/6 border-r border-slate-300 flex items-center justify-center'>Genre</div>
            <div className='w-1/6 border-r border-slate-300 flex flex-col items-center justify-center'>
                <p>Contact</p>
                <p>(Email / Mobile)</p>
            </div>
            <div className='w-1/6 flex flex-col items-center justify-center'>
                <p>Status</p>
                <p>(Available / Rented)</p>
            </div>
        </div>
        </div>

        <div className="w-[94%]">
            {bookList.map((book: Book) => (
                <div className='flex gap-2 items-center' key={book._id}>
                    <div  className="w-full py-4 mt-2 flex rounded-lg  bg-gray-900 ">
                        <div className="w-1/6  border-r border-slate-500 text-center">{book.title}</div>
                        <div className="w-1/6  border-r border-slate-500 text-center">{book.author}</div>
                        <div className="w-1/6  border-r border-slate-500 text-center">{book.genre ? book.genre : 'N/A'}</div>
                        <div className="w-1/6  border-r border-slate-500 text-center">{book.city}</div>

                        <div className="w-1/6  border-r border-slate-500 text-center">
                            <p>{book.owner.email} /</p> <p>{book.owner.mobile}</p>
                        </div>
                        <div className="w-1/6 text-center">
                            <p className={`font-semibold ${book.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                            {book.status}
                            </p>
                            {canUpdateStatus && (
                                <button
                                    onClick={() => handleStatusToggle(book._id, book.status)}
                                    className="text-xs mt-1 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Mark as {book.status === 'Available' ? 'Rented' : 'Available'}
                                </button>
                        )}
                        </div>
                    </div>
                    <div className='flex flex-col -mr-2 gap-2'>
                        {canUpdateStatus && (
                            <button 
                            onClick={() => handleDelete(book._id)} className='text-xs h-fit px-2 py-2 bg-red-600 text-white rounded hover:bg-red-700' >Delete</button>
                        )}
                        {canUpdateStatus && (
                            <button
                                onClick={() => handleEdit(book)}
                                className="text-xs mt-1px-2 py-2  bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Update
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>

        <EditBookModal
            book={selectedBook}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onUpdate={handleUpdate}
        />
    </>
  )
}

export default BookList