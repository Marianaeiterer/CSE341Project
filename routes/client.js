const express = require('express');
const router = express.Router();

const clientController = require("../controllers/clients");

//get all clients

router.get("/", clientController.getAllClients);

//get client by ID
router.get("/:id", clientController.getSingleClient);

//create new client 
router.post("/", clientController.createClient);

//update client
router.put("/:id", clientController.updateClient);

//delete client
router.delete("/:id", clientController.deleteClient);

module.exports = router;