const express = require("express");
const router = express.Router();
const registerSubmit = require("../Controller/RegisterController");

router.post("/submit", registerSubmit.localRegister);
router.get("/all-user", registerSubmit.fetchUser);

module.exports = router;
