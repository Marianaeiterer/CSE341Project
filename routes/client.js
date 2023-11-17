const express = require('express');
const router = express.Router();

const clientController = require("../controllers/clients");
const validation = require('../middleware/validate'); 

//get all clients

router.get("/", clientController.getAllClients);

//get client by ID
router.get("/:id", clientController.getSingleClient);

//create new client 
router.post("/", validation.saveClient, clientController.createClient);

//update client
router.put("/:id", validation.saveClient, clientController.updateClient);

//delete client
router.delete("/:id", clientController.deleteClient);

module.exports = router;