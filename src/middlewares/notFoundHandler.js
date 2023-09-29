export default (req, res, next) => {
  console.log(`not found ${req.method} ${req.url}`);
  return res.json({
    method: req.method,
    path: req.url,
    message: "not found",
  });
};
