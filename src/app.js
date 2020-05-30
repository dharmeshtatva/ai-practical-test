const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const users = require("./routes/users");
const errorHandler = require("./middlewares/error-handler");

// MongoDB Connect
require("./models/index")();
require("./models/counters");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// morgan
app.use(morgan("dev"));

// Cors TODD: Add config for domain
app.use(cors());

// welcome
app.get("/", (req, res) => {
  res.send("Welcome to Engineer.io Assignment");
});

// Users API
app.use("/api/", users);

// Error Handler
app.use(errorHandler);

module.exports = app;
