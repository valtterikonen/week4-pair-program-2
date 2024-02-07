const Service = require("../models/services");

// Get All services
const getAllServices = async (req, res) => {
  try {
    const allServices = await Service.find();
    res.json(allServices);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Single service by ID
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ msg: `No service with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create a New service
const createService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({ msg: "Please include name, description, and price" });
    }
    const newService = new Service({
      name,
      description,
      price,
    });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update service by ID
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedService) {
      res.json({ msg: "Service updated", service: updatedService });
    } else {
      res.status(404).json({ msg: `No service with the id of ${id}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete service by ID
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await Service.findByIdAndDelete(id);
    if (deletedService) {
      res.json({ msg: "Service deleted", service: deletedService });
    } else {
      res.status(404).json({ msg: `No service with the id of ${id}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};

