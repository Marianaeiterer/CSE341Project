const express = require('express');
const router = express.Router();

const clientController = require("../controllers/client");

//get all clients
router.get("/", clientController.getAll);

//get client by ID
router.get("/:id", clientController.getSingle);

//create new client 
router.post("/", clientController.createClient);

//update client
router.put("/:id", clientController.updateClient);

//delete client
router.delete("/:id", clientController.deleteClient);

module.exports = router;