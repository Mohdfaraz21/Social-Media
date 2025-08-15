const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      max: 50
    },
    desc: {
      type: String,
      max: 100
    },
    img: {
      type: String
    },
    likes: {
      type: [String],
      default: []
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
