const postService = require("@/services/post.service");
async function getAllPosts(req, res, next) {
  try {
    const posts = await postService.getAllPosts(req.query);
    res.success(posts);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  getAllPosts,
};
