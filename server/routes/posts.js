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
    const post = await Post.findById(req.params.id);
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

//@route /api/v1/posts/
//@desc Like or Unlike  post

router.put("/:id/like", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes:req.body.userId}});
            res.status(200).json("Post has been liked");
        } else {
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("Post has been Unliked");
        }
    }catch(err) {
        res.status(500).json(err);
    }
})

//@route /api/v1/posts/
//@desc Fetch the timeline of posts
router.get("/timeline/all", async (req,res) => {
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(currentUser.following.map((friendId) => {
            return Post.find({userId: friendId});
        }));
        res.status(200).json(userPosts.concat(friendPosts));
    } catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;
