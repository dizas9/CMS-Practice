const User = require("../Modal/UserModal");

module.exports = {
  localRegister: async (req, res) => {
    try {
      const { name, username, password, re_password, phone, email, image } =
        req.body;
      const user = new User({
        name,
        username,
        password,
        re_password,
        phone,
        email,
        image,
      });
      await user.save();
      res.status(201).json({ message: "User Registration SuccessFully Done" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "registration failed" });
    }
  },
  fetchUser: async (req, res) => {
    try {
      const userData = await User.find();
      res.json(userData);
    } catch (error) {
      console.error("Error Fetching user:", error);
      res.status(500).json({ error: "Fetch User Field" });
    }
  },
};
