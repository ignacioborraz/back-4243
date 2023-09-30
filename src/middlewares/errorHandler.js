import logger from "../config/logger.js";
export default (error, req, res, next) => {
  let message = `${req.method} ${req.url} - ${
    error.message
  } - ${new Date().toLocaleTimeString()}`;
  `${error.statusCode}`.startsWith("4")
    ? logger.WARN(message)
    : logger.ERROR(message);
  return res.status(error.statusCode).json({
    method: req.method,
    path: req.url,
    message: error.message,
  });
};
