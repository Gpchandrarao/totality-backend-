const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await User.findOne({ username });
    if (findUser) {
      res.status(400).json({ error: "User alredy exsits" });
    }

    const hasedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hasedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const findUser = await User.findOne({ username });
    const compareingPassword = await bcrypt.compare(
      password,
      findUser.password
    );

    if (!findUser || !compareingPassword) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign({ userId: findUser._id }, process.env.JWT_TOKEN);
    res.status(200).json({ message: "Login Successfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { userRegister, loginUser };
