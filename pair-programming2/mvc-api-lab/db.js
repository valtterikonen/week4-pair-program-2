const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    // Optionally handle the error, e.g., exit the process or log the error
    process.exit(1);
  }
};

module.exports = connectDB;