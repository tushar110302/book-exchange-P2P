import { Router } from "express";
import { 
    addBook, 
    getBooks, 
    updateStatus 
} from "../controllers/book.js";

const router = Router();

router.post("/addBook", addBook);
router.get("/getBooks", getBooks);
router.put('/updateStatus/:id',updateStatus);

export default router;