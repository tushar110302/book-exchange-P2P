import { Book } from "../models/bookModel.js";

export const addBook = async (req, res) => {
  try {
    const {title, author, genre, city, userId} = req.body;

    const book = new Book({ 
        title, 
        author, 
        city, 
        owner: userId,
        status: "Available"
    });
    if(genre) {
      book.genre = genre;
    }

    await book.save();
    return res.status(201).json({ 
        message: 'Book added', 
        book 
    });
  } catch (err) {
    return res.status(400).json({ 
        message: 'Error adding book', 
        error: err.message 
    });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({})
    .populate({
      path: 'owner',
      select: 'mobile email',
    });
    
    return res.status(200).json({ 
        message: 'Books found', 
        books 
    });
  } catch (err) {
    return res.status(400).json({ 
        message: 'Error finding books', 
        error: err.message 
    });
  }
};

export const getBooksById = async (req, res) => {
  try {
    const {id} = req.params;
    const books = await Book.find({owner: id})
    .populate({
      path: 'owner',
      select: 'mobile email',
    });
    
    return res.status(200).json({ 
        message: 'Books found', 
        books 
    });
  } catch (error) {
    return res.status(400).json({ 
      message: 'Error finding books', 
      error: err.message 
  });
  }
}
export const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = await Book.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updated);
};
