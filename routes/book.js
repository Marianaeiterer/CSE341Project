const express = require('express');
const router = express.Router();

const bookController = require("../controllers/book");

//get all books
router.get("/", bookController.getAll);

//get book by ID
router.get("/:id", bookController.getSingle);

//create new book 
router.post("/", bookController.createBook);

//update book
router.put("/:id", bookController.updateBook);

//delete book
router.delete("/:id", bookController.deleteBook);

module.exports = router;