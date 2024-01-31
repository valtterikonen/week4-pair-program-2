// routers/toursRouter.js

const express = require('express');
const toursController = require('../controllers/toursController');
const router = express.Router();

// Get All tours
router.get('/', toursController.getAllTours);

// Get Single tour by ID
router.get('/:id', toursController.getToursById);

// Create a New tour
router.post('/', toursController.createTours);

// Update tour by ID
router.put('/:id', toursController.updateTours);

// Delete tour by ID
router.delete('/:id', toursController.deleteTours);

module.exports = router;