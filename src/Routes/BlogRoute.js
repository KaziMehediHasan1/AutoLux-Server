const express = require("express");
const {
  createBlogs,
  readBlogs,
  deleteOneBlog,
  findByIdAndUpdate,
  paginateAndSearchBlog,
  DashBlog,
} = require("../Controller/BlogController");
const route = express.Router();
// create a blog..
route.post("/blogs", createBlogs);
route.get("/blogs", readBlogs);
route.delete("/blogs/:id", deleteOneBlog);
route.put("/blogs/:id", findByIdAndUpdate);
route.get("/blogPage", paginateAndSearchBlog);
route.get("/DashBlog", DashBlog)

module.exports = route;
