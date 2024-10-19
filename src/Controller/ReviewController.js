const reviewModel = require("../Model/ReviewModel");
// post review..
postReview = async (req, res) => {
  const review = req.body;
  console.log(review, "5 no line");
  try {
    const saveReview = new reviewModel({ ...review });
    const postData = await saveReview.save();
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getAllReview = async (req, res) => {
  try {
    const findActualData = await reviewModel.find();
    res.status(200).json(findActualData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

findByIdAndDeleteOne = async (req, res) => {
  const id = req.params.id;
  console.log(id, "asche");
  try {
    const findId = await reviewModel.findOneAndDelete({
      _id: id,
    });
    if (findId) {
      res.status(200).json(findId);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

findOneAndUpdate = async (req, res) => {
  const { id, value } = req.query;
  console.log(id, value, "got it");
  try {
    const updateReviewData = await reviewModel.findOneAndUpdate(
      { _id: id },
      {
        review: value,
      },
      { new: true }
    );
    if (!updateReviewData) {
      res.status(404).json({ message: "Review Not found" });
    }
    res.status(200).json(updateReviewData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  postReview,
  getAllReview,
  findByIdAndDeleteOne,
  findOneAndUpdate,
};
