import loggers from "../config/loggers/factory.js";

export default (error, req, res, next) => {
  let message = `${req.method} ${req.url} - ${
    error.message
  } - ${new Date().toLocaleTimeString()}`;
  `${error.statusCode}`.startsWith("4")
    ? loggers.WARN(message)
    : loggers.ERROR(message);
  return res.status(error.statusCode).json({
    method: req.method,
    path: req.url,
    message: error.message,
  });
};
