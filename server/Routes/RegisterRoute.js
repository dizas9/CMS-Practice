const express = require("express");
const router = express.Router();
const registerSubmit = require("../Controller/RegisterController");

router.post("/submit", registerSubmit.localRegister);

module.exports = router;
