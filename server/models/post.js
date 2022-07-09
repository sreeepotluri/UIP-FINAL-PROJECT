// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
// 2. create schema for entity
const postSchema = new mongoose.Schema({
  postsubject: { type: String, required: true},
  poststatus: { type: String, required: true},
  userid: { type: String, required: true}
})

// 3. create model of schema
const Post = mongoose.model("Post", postSchema);

// // 4. create CRUD functions on model
// //CREATE a post
async function create(userid,postsubject, poststatus) {

  const newPost = await Post.create({
    postid: userid,
    postsubject: postsubject,
    poststatus: poststatus,
    userid: userid
  });
  return newPost;
}

// // View a post
async function read(userid) {
  const post = await Post.find({"userid": userid});
  return post;
}

// // UPDATE
async function updatePost(id, postsubject, poststatus) {
  const post = await Post.updateOne({"_id": id}, {$set: { postsubject: postsubject, poststatus: poststatus }});
  return post;
}

// //DELETE
async function deletePost(id) {
  const post = await Post.deleteOne({"_id": id});
  return post;
};

// // utility functions
 async function getPost(post) {
  return await Post.findOne({ "post": post});
 }

// // 5. export all functions we want to access in route files
 module.exports = { 
  create, read, updatePost, deletePost, getPost
};