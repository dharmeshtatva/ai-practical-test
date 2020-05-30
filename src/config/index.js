require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    connection:
      process.env.DB_CONNECTION || "mongodb://localhost:27017/engineerai",
  },
};
