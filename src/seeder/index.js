const seeder = require("mongoose-seed");
const config = require("../config");
const Counter = require("../models/counters");

const data = [
  {
    model: "User",
    documents: [
      {
        id: 1,
        firstName: "albert",
        lastName: "einstein",
        email: "ae@relativity.com",
      },
      {
        id: 2,
        firstName: "marie",
        lastName: "curie",
        email: "mc@radiation.com",
      },
      {
        id: 3,
        firstName: "issac",
        lastName: "newton",
        email: "in@gravity.com",
      },
      {
        id: 4,
        firstName: "galileo",
        lastName: "galilei",
        email: "gg@astronomy.com",
      },
    ],
  },
];

// Connect to MongoDB via Mongoose
seeder.connect(config.db.connection, function () {
  // Load Mongoose models
  seeder.loadModels(["src/models/users.js"]);

  // Clear specified collections
  seeder.clearModels(["User"], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, async function () {
      await Counter.updateOne({ _id: "userid" }, { seq: 4 });
      seeder.disconnect();
    });
  });
});
