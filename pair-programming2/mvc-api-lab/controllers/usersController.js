// controllers/usersController.js

const uuid = require('uuid');
const users = require('../models/users');

// Get All users
const getAllusers = (req, res) => {
  res.json(users);
};

// Get Single Users by ID
const getUsersById = (req, res) => {
  const found = users.some((users) => users.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((Users) => Users.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No Users with the id of ${req.params.id}` });
  }
};

// Create a New Users
const createUsers = (req, res) => {
  const newUsers = {
    id: uuid.v4(),
    ...req.body,
  };

  users.push(newUsers);
  res.json(users);
};

// Update Users by ID
const updateUsers = (req, res) => {
  const found = users.some((Users) => Users.id === parseInt(req.params.id));

  if (found) {
    users.forEach((Users, i) => {
      if (Users.id === parseInt(req.params.id)) {
        users[i] = { ...Users, ...req.body };
        res.json({ msg: 'Users updated', Users: users[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No Users with the id of ${req.params.id}` });
  }
};

// Delete Users by ID
const deleteUsers = (req, res) => {
  const found = users.some((Users) => Users.id === parseInt(req.params.id));

  if (found) {
    const updatedusers = users.filter((Users) => Users.id !== parseInt(req.params.id));
    res.json({ msg: 'Users deleted', users: updatedusers });
  } else {
    res.status(400).json({ msg: `No Users with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllusers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
};