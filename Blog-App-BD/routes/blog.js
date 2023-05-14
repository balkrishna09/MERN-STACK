const express = require("express");
const router = express.Router();

//import controller
const { dummy } = require("../controllers/dummy");
const { createComment } = require("../controllers/commentController");
const {createPost,getAllPosts} = require("../controllers/postController");
// const {getAllPosts} = require("../controllers/postController")
const {likePost, unlikePost,} = require("../controllers/likeController");

router.get("/dummy", dummy);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost)
router.post("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

module.exports = router;
