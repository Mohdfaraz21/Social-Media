const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//@route /api/v1/auth/register
router.get("/", (req, res) => {
  res.send("Hello from auth route");
});

//@route  /api/v1/auth/register
//@desc  Register a new user

router.post("/register", async (req, res) => {
  try {
    //Generate new Hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create new user credentials
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//@route /api/v1/auth/login
//@desc Login a user

router.post("/login", async (req, res) => {
  try {
    
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
