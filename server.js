const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./utils/connectDb");
const Score = require("./models/Score");

const db = connectDb();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "It's alive", date: new Date().toISOString() });
});

app.get("/scores", (req, res) => {
  if (db) {
    res
      .status(200)
      .json({ message: "DB ready", date: new Date().toISOString() });
  } else {
    res.status(500).json({ message: "DB is NOT ready" });
  }
});

app.post("/scores", (req, res) => {
  console.log("req.body", req.body);
  const score = new Score({
    user: "anonymous",
    time: req.body.time,
    date: req.body.date
  });
  score.save((err, score) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to save score" });
    }
    res.status(201).json({ data: score });
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
