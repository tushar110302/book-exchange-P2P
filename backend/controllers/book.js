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
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log(status)
    const updated = await Book.findByIdAndUpdate(id, 
      { $set:{status} }, 
      { new: true });
  
      console.log(updated)
    return res.status(200).json({
      message: 'Status updated',
      updated
    });
  } catch (error) {
      return res.status(400).json({ 
        message: 'Error updating status', 
        error: err.message 
      });
  }
};

export const editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, city } = req.body;

    const updated = await Book.findByIdAndUpdate(id, 
      { $set:{
          title, 
          author, 
          genre, 
          city
      }}, 
      { new: true });
  
    console.log(updated)
    
    return res.status(200).json({
      message: 'Book updated',
      updated
    });

  } catch (error) {
    return res.status(400).json({ 
      message: 'Error Editing status', 
      error: err.message 
    });
  }

}

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);

    return res.status(200).json({
      message: 'Book deleted',
      deleted
    });
    
  } catch (error) {
    return res.status(400).json({ 
      message: 'Error deleting book', 
      error: err.message 
    });
  }
}