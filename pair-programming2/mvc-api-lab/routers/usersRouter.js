// routers/usersRouter.js

const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

// Get All users
router.get('/', usersController.getAllusers);

// Get Single user by ID
router.get('/:id', usersController.getUsersById);

// Create a New user
router.post('/', usersController.createUsers);

// Update user by ID
router.put('/:id', usersController.updateUsers);

// Delete user by ID
router.delete('/:id', usersController.deleteUsers);

module.exports = router;