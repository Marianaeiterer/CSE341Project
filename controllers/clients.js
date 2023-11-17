const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//get all clients
const getAllClients = async (req, res) => {
  //#swagger.tags=['Clients']
  const result = await mongodb
    .getDatabase()
    .db() 
    .collection('clients') 
    .find(); 
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//get one client by id
const getSingleClient = async (req, res) => {
  //#swagger.tags=['Clients']
  //validation of the id
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid client id to find a client.');
  }
  const clientId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('clients')
    .find({ _id: clientId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createClient = async (req, res) => {
  //#swagger.tags=['Clients']
  const client = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    phone: req.body.phone,
    email: req.body.email,
  };

  const response = await mongodb
    .getDatabase()
    .db()
    .collection('clients')
    .insertOne(client);
  if (response.acknowledged > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the client.');
  }
};

const updateClient = async (req, res) => {
  //#swagger.tags=['Clients']
  //validation of the id
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid client id to update a client.');
  }
  const clientId = new ObjectId(req.params.id);
  const client = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    phone: req.body.phone,
    email: req.body.email,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('clients')
    .replaceOne({ _id: clientId }, client);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the client.');
  }
};

const deleteClient = async (req, res) => {
  //#swagger.tags=['Clients']
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid client id to delete a client.');
  }
  const clientId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('clients')
    .deleteOne({ _id: clientId }, true);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the client.');
  }
};

module.exports = {
  getAllClients,
  getSingleClient,
  createClient,
  updateClient,
  deleteClient,
};
