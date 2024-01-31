// controllers/servicesController.js

const uuid = require('uuid');
const services = require('../models/services');

// Get All services
const getAllservices = (req, res) => {
  res.json(services);
};

// Get Single services by ID
const getservicesById = (req, res) => {
  const found = services.some((services) => services.id === parseInt(req.params.id));

  if (found) {
    res.json(services.filter((services) => services.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No services with the id of ${req.params.id}` });
  }
};

// Create a New services
const createservices = (req, res) => {
  const newservices = {
    id: uuid.v4(),
    ...req.body,
  };

  services.push(newservices);
  res.json(services);
};

// Update services by ID
const updateservices = (req, res) => {
  const found = services.some((services) => services.id === parseInt(req.params.id));

  if (found) {
    services.forEach((services, i) => {
      if (services.id === parseInt(req.params.id)) {
        services[i] = { ...services, ...req.body };
        res.json({ msg: 'services updated', services: services[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No services with the id of ${req.params.id}` });
  }
};

// Delete services by ID
const deleteservices = (req, res) => {
  const found = services.some((services) => services.id === parseInt(req.params.id));

  if (found) {
    const updatedservices = services.filter((services) => services.id !== parseInt(req.params.id));
    res.json({ msg: 'services deleted', services: updatedservices });
  } else {
    res.status(400).json({ msg: `No services with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllservices,
  getservicesById,
  createservices,
  updateservices,
  deleteservices,
};