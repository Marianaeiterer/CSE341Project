const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//get all books
const getAllBooks = async (req, res) => {
  //#swagger.tags=['Books']
  const result = await mongodb
    .getDatabase()
    .db() 
    .collection('books') 
    .find(); 
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//get one book by id
const getSingleBook = async (req, res) => {
  //#swagger.tags=['Books']
  //validation of the id
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid client id to find a client.');
  }
  const bookId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('books')
    .find({ _id: bookId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createBook = async (req, res) => {
  //#swagger.tags=['Books']
  const book = {
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
    numberPages: req.body.numberPages,
    language: req.body.language,
    genre: req.body.genre,
    available: req.body.available,
  };

  const response = await mongodb
    .getDatabase()
    .db()
    .collection('books')
    .insertOne(book);
  if (response.acknowledged > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error occurred while creating the book.');
  }
};

const updateBook = async (req, res) => {
  //#swagger.tags=['Books']
  //validation of the id
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid book id to update a book.');
  }
  const bookId = new ObjectId(req.params.id);
  const book = {
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
    numberPages: req.body.numberPages,
    language: req.body.language,
    genre: req.body.genre,
    available: req.body.available,
  };

  const response = await mongodb
    .getDatabase()
    .db()
    .collection('books')
    .replaceOne({ _id: bookId }, book);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error occurred while updating the book.');
  }
};

const deleteBook = async (req, res) => {
  //#swagger.tags=['Books']
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid book id to delete a book.');
  }
  const bookId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('books')
    .deleteOne({ _id: bookId }, true);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error occurred while deleting the book.');
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
