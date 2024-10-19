const BlogModel = require("../Model/BlogModel");
// read a blog
createBlogs = async (req, res) => {
  const allBlogs = req.body;
  //   console.log(allBlogs, "4 no line ");
  try {
    const newBlog = new BlogModel({ ...allBlogs });
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// read blogs..
readBlogs = async (req, res) => {
  try {
    const getBlog = await BlogModel.find();
    res.status(200).json(getBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// pagination route...
paginateAndSearchBlog = async (req, res) => {
  try {
    const search = req.query.search || "";
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    const skip = (page - 1) * limit;
    const query = {};
    console.log(query);
    if (search) {
      query.title = { $regex: `.*${search}.*`, $options: "i" };
    }
    if (search) {
      query.description = { $regex: `.*${search}.*`, $options: "i" };
    }
    const AllBlog = await BlogModel.find(query).limit(limit).skip(skip);
    const totalBlogPostLength = await BlogModel.estimatedDocumentCount();
    const totalPages = Math.ceil(totalBlogPostLength / limit);
    res.status(200).json({
      AllBlog,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// delete one
deleteOneBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBlog = await BlogModel.findByIdAndDelete(id);
    if (deleteBlog) {
      res.status(200).json(deleteBlog);
    } else {
      res.status(404).json({ message: "blog not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

DashBlog = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const skip = (page - 1) * limit;
    const AllBlogs = await BlogModel.find().limit(limit).skip(skip);
    const totalBlogPostLength = await BlogModel.estimatedDocumentCount();
    const totalPages = Math.ceil(totalBlogPostLength / limit);
    res.status(200).json({
      AllBlogs,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// update a blog
findByIdAndUpdate = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    // Combine $inc and updateData into a single update object
    const updateBlog = await BlogModel.findOneAndUpdate(
      { _id: id },
      {
        $inc: { viewCount: 1 }, // Increment viewCount by 1
        ...updateData, // Spread the updateData to apply other updates
      },
      {
        new: true, // Return the updated document
        runValidators: true, // Validate according to the schema
      }
    );

    if (updateBlog) {
      res
        .status(200)
        .json({ success: true, message: "Blog successfully updated!" });
    } else {
      res.status(404).json({ success: false, message: "Blog not found!" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update the blog." });
  }
};

module.exports = {
  createBlogs,
  readBlogs,
  deleteOneBlog,
  findByIdAndUpdate,
  paginateAndSearchBlog,
  DashBlog,
};
