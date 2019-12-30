const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./utils/connectDb");

const db = connectDb();

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

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
