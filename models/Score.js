const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  user: mongoose.Schema.Types.String,
  points: mongoose.Schema.Types.Number,
  date: mongoose.Schema.Types.Date
});

module.exports = mongoose.model("Score", ScoreSchema);
