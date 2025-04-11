import axios from 'axios';
import React, { useState } from 'react'

function BookList({books, canUpdateStatus=false}: any) {
    const [bookList, setBookList] = useState(books);

    const handleStatusToggle = async (bookId: string, currentStatus: string) => {

        const newStatus = currentStatus === 'Available' ? 'Rented' : 'Available';
        try {
            const res = await axios.put(`http://localhost:4000/api/books/updateStatus/${bookId}`, 
                { status: newStatus});

            console.log(res);
            setBookList((prevBooks: any) =>
                prevBooks.map((book: any) =>
                  book._id === bookId ? { ...book, status: newStatus } : book
                )
              );
        } catch (err) {
            console.error('Error updating status:', err);
        }
    }
  return (
    <>
    <div className=' w-[100%] mx-auto  rounded-lg bg-zinc-900 text-gray-400 ' >
        <div className=' w-full flex justify-between py-4 text-center'>
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

        <div className="w-[100%]">
            {bookList.map((book:any) => (
                <div key={book._id} className="w-full py-4 mt-2 flex rounded-lg  bg-gray-900 ">
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
            ))}
        </div>
    </>
  )
}

export default BookList