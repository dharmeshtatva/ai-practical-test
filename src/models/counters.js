const mongoose = require("mongoose");

const countersSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    required: true,
  },
});

const Counter = mongoose.model("counters", countersSchema);
async function intiateCounters() {
  const counters = await Counter.find({});
  if (!counters || !counters.length > 0) {
    const counter = new Counter({
      _id: "userid",
      seq: 0,
    });
    await counter.save();
  }
}

intiateCounters();
module.exports = Counter;
