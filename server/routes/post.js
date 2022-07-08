// 1. import any needed libraries
const express = require("express");
const Post = require('../models/post'); //accesses functions in user model file
const router = express.Router();

// 2. create all routes to access database
router
.post('/readposts', async (req, res) => {
  try {
    const posts = await Post.read(req.body.userid);
    res.send(posts);
  } catch(error) {
    res.status(401).send({ message: error.message });
  }
})

  .post('/create', async (req, res) => {
    try {  
      const post = await Post.create(req.body.userid, req.body.posttitle, req.body.postcontent);
      res.send({success:"post saved"});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const post = await Post.updatedate(req.body.postname, req.body.postdateandtime);
      res.send({...post, postdateandtime});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      const post = await Post.deletePost(req.body.id);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;