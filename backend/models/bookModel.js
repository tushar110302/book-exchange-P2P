import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
    },
    city:{
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{
        type: String,
        enum: ["Available", "Rented"],
        default: "Available"
    }
    // Title, Author, Genre (optional), City/Location, Contact Email/Phone
}, {timestamps: true});         

export const Book = new mongoose.model("Book", bookSchema);