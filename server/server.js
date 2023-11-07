const express = require("express");
const cors = require("cors");
const app = express();
const registerRoute = require("./Routes/RegisterRoute");
const dotenv = require("dotenv");
const connectDB = require("./Database/db");
dotenv.config();
const port = process.env.PORT;



app.use(cors());
app.use(express.json());
app.use("/user", registerRoute);

app.get("/", (req, res) => {
  res.json({ message: "Sazid you do it Again" });
});
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Hello From port : ${port}`);
  });
});
