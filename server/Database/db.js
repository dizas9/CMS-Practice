const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.set("strict", false);
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected");
  } catch (err) {
    console.log("Sorry");
  }
};

module.exports = connectDB;
