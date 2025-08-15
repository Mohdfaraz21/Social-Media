const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//@route /api/v1/posts/
//@desc create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//@route /api/v1/posts/
//@desc update a post

router.put("/:id", async (req, res) => {
  try {
    const Post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post has been updated");
    } else {
      res.status(409).json("You can update your post only");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
