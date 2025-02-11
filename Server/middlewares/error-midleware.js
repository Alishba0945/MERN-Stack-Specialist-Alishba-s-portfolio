const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const errorDetail = err.errorDetail || "Error from Backend";

  return res.status(status).json({ message, errorDetail});

}

module.exports= errorMiddleware;
