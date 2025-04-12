"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

const EditBookModal = ({ book, isOpen, onClose, onUpdate }: any) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    city: "",
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        genre: book.genre || "",
        city: book.city,
      });
    }
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!book) return;

    try {
      const res = await axios.put(`http://localhost:4000/api/books/editBook/${book._id}`, formData);

      const updatedBook = res.data.updated;
      onUpdate(updatedBook);
      onClose();
      
    } catch (err) {
      console.log("Error updating book:", err);
    }
  };

  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Edit Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700"
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700"
            required
          />
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookModal;
