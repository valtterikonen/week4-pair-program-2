// controllers/ToursController.js

const uuid = require('uuid');
const Tours = require('../models/tours');

// Get All Tours
const getAllTours = (req, res) => {
  res.json(Tours);
};

// Get Single Tours by ID
const getToursById = (req, res) => {
  const found = Tours.some((Tours) => Tours.id === parseInt(req.params.id));

  if (found) {
    res.json(Tours.filter((Tours) => Tours.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No Tours with the id of ${req.params.id}` });
  }
};

// Create a New Tours
const createTours = (req, res) => {
  const newTours = {
    id: uuid.v4(),
    ...req.body,
  };

  Tours.push(newTours);
  res.json(Tours);
};

// Update Tours by ID
const updateTours = (req, res) => {
  const found = Tours.some((Tours) => Tours.id === parseInt(req.params.id));

  if (found) {
    Tours.forEach((Tours, i) => {
      if (Tours.id === parseInt(req.params.id)) {
        Tours[i] = { ...Tours, ...req.body };
        res.json({ msg: 'Tours updated', Tours: Tours[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No Tours with the id of ${req.params.id}` });
  }
};

// Delete Tours by ID
const deleteTours = (req, res) => {
  const found = Tours.some((Tours) => Tours.id === parseInt(req.params.id));

  if (found) {
    const updatedTours = Tours.filter((Tours) => Tours.id !== parseInt(req.params.id));
    res.json({ msg: 'Tours deleted', Tours: updatedTours });
  } else {
    res.status(400).json({ msg: `No Tours with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllTours,
  getToursById,
  createTours,
  updateTours,
  deleteTours,
};