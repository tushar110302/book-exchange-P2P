import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        emum: ["Owner", "Seeker"],
        required: true
    },
}, {timestamps: true});

export const User = new mongoose.model("User", userSchema);