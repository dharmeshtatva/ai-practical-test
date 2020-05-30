const mongoose = require("mongoose");
const config = require("../config");

const connectDb = async () => {
  const connection = await mongoose.connect(config.db.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = connection.connection.db;
  return db;
};

module.exports = connectDb;
