const express = require('express');
const router = express.Router();

const bookController = require('../controllers/books');
const validation = require('../middleware/validate');
const { isAuthenticate } = require('../middleware/authenticate');

//get all books
router.get('/', bookController.getAllBooks);

//get book by ID
router.get('/:id', bookController.getSingleBook);

//create new book
router.post(
  '/',
  isAuthenticate,
  validation.saveBook,
  bookController.createBook
);

//update book
router.put(
  '/:id',
  isAuthenticate,
  validation.saveBook,
  bookController.updateBook
);

//delete book
router.delete(
  '/:id',
  isAuthenticate,
  validation.saveBook,
  bookController.deleteBook
);

module.exports = router;
