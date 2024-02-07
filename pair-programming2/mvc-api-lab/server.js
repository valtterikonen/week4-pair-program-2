const error = require('./middleware/errorMiddleware');
const notFound = require('./middleware/notFoundMiddleware');
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db.js'); // Adjust the path accordingly

const port = process.env.PORT || 3000;
const app = express();
connectDB();

// Body Parser Middleware
app.use(express.json());

// Members API Routes
app.use('/api/tours', require('./routers/toursRouter'));
app.use('/api/services', require('./routers/servicesRouter'));
app.use('/api/users', require('./routers/usersRouter'));

// Init middleware
app.use(notFound);
app.use(error);

const PORT = 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));