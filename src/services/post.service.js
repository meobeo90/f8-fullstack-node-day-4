const postModel = require("@/models/post.model");
async function getAllPosts(query) {
  let page = parseInt(query.page) || 1;
  let limit = parseInt(query.limit) || 20;
  const user_id = query.user_id;
  if (limit < 1) limit = 20;
  if (limit > 500) limit = 500;
  const offset = (page - 1) * limit;
  const [posts, total] = await Promise.all([
    postModel.findAll({ limit, offset, user_id }),
    postModel.countAll(user_id),
  ]);
  let from = 0;
  let to = 0;
  if (posts.length > 0) {
    from = offset + 1;
    to = offset + posts.length;
  }
  return {
    data: posts || [],
    pagination: {
      total,
      per_page: limit,
      current_page: page,
      from,
      to,
    },
  };
}
module.exports = {
  getAllPosts,
};
