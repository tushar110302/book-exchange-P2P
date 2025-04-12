import { Router } from "express";
import { 
    addBook, 
    deleteBook, 
    editBook, 
    getBooks, 
    getBooksById, 
    updateStatus 
} from "../controllers/book.js";

const router = Router();

router.post("/addBook", addBook);
router.get("/getBooks", getBooks);
router.get("/getBooksById/:id", getBooksById);
router.put('/updateStatus/:id',updateStatus);
router.put("/editBook/:id", editBook);
router.delete("/deleteBook/:id", deleteBook);

export default router;