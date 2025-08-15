const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("Hello from users route");
});

//@route /api/v1/users/
//@desc update user profile
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your profile");
  }
});

//@route /api/v1/users/
//@desc delete user profile
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your profile");
  }
});

//@route /api/v1/users/
//@desc get the user profile
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//@route /api/v1/users/
//@desc follow a  user
/* router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user || !currentUser) {
        return res.status(404).json("user not found");
      }

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $addToSet: { followers: req.body.userId } });
        await currentUser.updateOne({
          $addToSet: { followings: req.params.id },
        });
        res.status(200).json("User has been followed");
      } else {
        res.status(409).json("You already follow this person");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(400).json("You cannot follow yourself");
  }
}); */

//@route /api/v1/users/
//@desc follow a  user
router.put("/:id/follow", async (req, res) => {
  console.log("📩 Request Received");
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      console.log("📌 Target User:", user);
      console.log("📌 Current User:", currentUser);

      if (!user || !currentUser) {
        return res.status(404).json("user not found");
      }

      console.log("👀 Followers list:", user.followers);

      if (!user.followers.includes(req.body.userId)) {
        console.log("✅ Adding follower...");
        await user.updateOne({ $addToSet: { followers: req.body.userId } });
        await currentUser.updateOne({
          $addToSet: { followings: req.params.id },
        });
        console.log("🎯 Follow successful");
        res.status(200).json("User has been followed");
      } else {
        console.log("⚠ Already following");
        res.status(409).json("You already follow this person");
      }
    } catch (err) {
      console.error("💥 Error in follow API:", err.message);
      res.status(500).json({ error: err.message });
    }
  } else {
    console.log("❌ Self-follow attempt");
    return res.status(400).json("You cannot follow yourself");
  }
});

//@route /api/v1/users/
//@desc unfollow a  user

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("User has been unfollowed");
      } else {
        res
          .status(409)
          .json("You don't follow this person so you cannot unfollow them");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(400).json("You cannot unfollow yourself");
  }
});

module.exports = router;
