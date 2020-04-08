const express = require("express");
const router = express.Router();

const BlogPost = require("../models/blogPost");

// ROUTES
router.get("/", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      // console.log("data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/save", (req, res) => {
  const data = req.body;
  const newBlogPost = new BlogPost(data);

  // .save
  newBlogPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server error!" });
      return;
    }
    // Blog post
    return res.json({
      msg: " We received your detail!",
    });
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "sachu",
    age: 20,
  };
  res.json(data);
});

module.exports = router;
