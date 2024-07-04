const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.status(200).json("Port is running");
});

app.listen(port, () => {
  console.log("port is running in 3000");
});
