const notFoundMiddleware = (req, res, next) => {
  res.status(404).send('notFound');
};

module.exports = notFoundMiddleware;