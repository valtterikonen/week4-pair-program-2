const errorMiddleware = (req, res, next) => {
  res.status(500).send('error');
};

module.exports = errorMiddleware;
