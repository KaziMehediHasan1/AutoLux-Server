const Bookmark = require("../Model/BookmarkListingModel");

Bookmarked = async (req, res) => {
  try {
    const id = req.params.id;
    const { person } = req.body;
    // console.log(person);
    let bookmark = await Bookmark.findOne({ person, listingId: id });
    if (!bookmark) {
      bookmark = new Bookmark({
        person,
        listingId: id,
        isBookmarked: true,
      });
      await bookmark.save();
      return res.status(200).json({
        success: true,
        message: "Listing bookmarked successfully",
        data: bookmark,
      });
    } else {
      bookmark.isBookmarked = !bookmark.isBookmarked;
      await bookmark.save();
      const message = bookmark.isBookmarked
        ? "Listing bookmarked successfully"
        : "bookmarked removed successfully";
      return res.status(200).json({ success: true, message, data: bookmark });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getBookmarked = async (req, res) => {
  try {
    const findBookmarkedUser = await Bookmark.find();
    res.status(200).json(findBookmarkedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { Bookmarked, getBookmarked };
