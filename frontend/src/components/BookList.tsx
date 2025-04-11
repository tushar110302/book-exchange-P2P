import React from 'react'

function BookList({books}:any) {
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
        {books.map((book:any) => (
            <div key={book._id} className="w-full py-4 mt-2 flex rounded-lg  bg-gray-900 ">
            <div className="w-1/6  border-r border-slate-500 text-center">{book.title}</div>
            <div className="w-1/6  border-r border-slate-500 text-center">{book.author}</div>
            <div className="w-1/6  border-r border-slate-500 text-center">{book.genre ? book.genre : 'N/A'}</div>
            <div className="w-1/6  border-r border-slate-500 text-center">{book.city}</div>

            <div className="w-1/6  border-r border-slate-500 text-center">
                <p>{book.owner.email} /</p> <p>{book.owner.mobile}</p>
            </div>
            <div className={`w-1/6  text-center ${book.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
                {book.status === 'Available' ? 'Available' : 'Rented'}
            </div>
            </div>
        ))}
        </div>
    </>
  )
}

export default BookList