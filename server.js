const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "It's alive", date: new Date().toISOString() });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
