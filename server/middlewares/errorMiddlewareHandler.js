const errorMiddlewareHandler = (err, req, res, next) => {
  // Set the default status code to 500 (Internal Server Error)
  let statusCode = 500;

  // Check if the error has a status code
  if (err.statusCode && typeof err.statusCode === "number") {
    statusCode = err.statusCode;
  }

  res.status(statusCode).json({
    message: err.message,
  });
};

export default errorMiddlewareHandler;
