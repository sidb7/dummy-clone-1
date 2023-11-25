const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/data", async (req, res) => {
  try {
    const names = [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eva",
      "Frank",
      "Grace",
      "Henry",
      "Ivy",
      "Jack",
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    res.status(200).send({ data: names[randomIndex] });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/submitData", async (req, res) => {
  try {
    const data = req.body;
    res.status(200).send({ message: `Person added : ${data.name}` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(1337, () => {
  console.log("server is running on port 1337");
});
