const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./Database/db");
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Sazid you do it Again" });
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Hello From port : ${port}`);
  });
});
