// routers/servicesRouter.js

const express = require('express');
const servicesController = require('../controllers/servicesController');
const router = express.Router();

// Get All services
router.get('/', servicesController.getAllservices);

// Get Single service by ID
router.get('/:id', servicesController.getservicesById);

// Create a New service
router.post('/', servicesController.createservices);

// Update service by ID
router.put('/:id', servicesController.updateservices);

// Delete service by ID
router.delete('/:id', servicesController.deleteservices);

module.exports = router;