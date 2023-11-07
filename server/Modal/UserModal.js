const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    username: {
      type: String,
      unique: true,
      sparse: true,
      partialFilterExpression: { username: { type: "String" } },
      default: null,
    },
    password: {
      type: String,
    },
    re_password: {
      type: String,
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
      default: null,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      partialFilterExpression: { email: { type: "String" } },
      default: null,
    },
    //path/URL to the image
    image: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
