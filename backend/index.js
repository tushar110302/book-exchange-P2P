import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./db/dbConfig.js";
import authRouter from "./routes/auth.js"
import bookRouter from "./routes/book.js"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/users', authRouter);
app.use('/api/books', bookRouter);

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});