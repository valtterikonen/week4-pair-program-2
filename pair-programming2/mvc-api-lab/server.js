const express = require('express');
const error = require('./middleware/errorMiddleware');
const notFound = require('./middleware/notFoundMiddleware');

const app = express();

// Init middleware
app.use(notFound);
app.use(error);

// Body Parser Middleware
app.use(express.json());

// Members API Routes
app.use('/api/tours', require('./routers/toursRouter'));
app.use('/api/services', require('./routers/servicesRouter'));
app.use('/api/users', require('./routers/usersRouter'));

const PORT = 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));