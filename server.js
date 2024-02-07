const express = require("express");
const error = require("./middleware/errorMiddleware");
const notFound = require("./middleware/notFoundMiddleware");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const app = express();

// Body Parser Middleware
app.use(express.json());

// Init middleware
app.use(error);

app.use("/api/users", require("./routers/usersRoutes"));
app.use("/api/services", require("./routers/servicesRoutes"));
app.use("/api/tours", require("./routers/toursRoutes"));

// Handle 404 Not Found errors
app.use(notFound);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

