const Counter = require("../models/counters");

async function getNextSequenceValue(sequenceName) {
  const sequenceDocument = await Counter.findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { seq: 1 } },
    { new: true }
  );
  return sequenceDocument.seq;
}

function successResponse(data, message = "SUCCESS") {
  return {
    success: true,
    message,
    data,
  };
}

function errorResponse(errors, message = "ERROR") {
  return {
    success: false,
    message,
    errors,
  };
}

module.exports = {
  getNextSequenceValue,
  successResponse,
  errorResponse,
};
