const express = require('express');
const router = express.Router();

const clientController = require('../controllers/clients');
const validation = require('../middleware/validate');
const { isAuthenticate } = require('../middleware/authenticate');

//get all clients

router.get('/', clientController.getAllClients);

//get client by ID
router.get('/:id', clientController.getSingleClient);

//create new client
router.post(
  '/',
  isAuthenticate,
  validation.saveClient,
  clientController.createClient
);

//update client
router.put(
  '/:id',
  isAuthenticate,
  validation.saveClient,
  clientController.updateClient
);

//delete client
router.delete(
  '/:id',
  isAuthenticate,
  validation.saveClient,
  clientController.deleteClient
);

module.exports = router;
