import { Router } from "express";
import { 
    addBook, 
    getBooks, 
    getBooksById, 
    updateStatus 
} from "../controllers/book.js";

const router = Router();

router.post("/addBook", addBook);
router.get("/getBooks", getBooks);
router.get("/getBooksById/:id", getBooksById);
router.put('/updateStatus/:id',updateStatus);

export default router;