const { isCelebrate } = require("celebrate");
const { errorResponse } = require("../helpers");

const errorHandler = (err, req, res, next) => {
  if (isCelebrate(err)) {
    return res.status(400).json(errorResponse(err.message, "BAD_REQUEST"));
  }

  return res
    .status(err.code || 500)
    .json(errorResponse(err.message || "Something went wrong", "ERROR"));
};

module.exports = errorHandler;
