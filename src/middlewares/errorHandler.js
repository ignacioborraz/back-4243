export default (error, req, res, next) => {
  console.error(error);
  return res.status(error.statusCode).json({
    method: req.method,
    path: req.url,
    message: error.message,
  });
};
