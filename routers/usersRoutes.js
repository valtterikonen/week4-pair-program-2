const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route to get all users
router.get('/', usersController.getAllUsers);

// Other routes for CRUD operations can be defined similarly

module.exports = router;
