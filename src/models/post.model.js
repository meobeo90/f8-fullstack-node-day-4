const db = require("@/config/database");
// GET ALL
async function findAll({ limit, offset, user_id }) {
  let sql = "SELECT * FROM posts";
  const params = [];
  if (user_id) {
    sql += " WHERE user_id = ?";
    params.push(user_id);
  }
  sql += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
  params.push(limit, offset);
  const [rows] = await db.query(sql, params);
  return rows;
}

// COUNT ALL
async function countAll(user_id) {
  let sql = "SELECT COUNT (*) as total FROM posts";
  const params = [];
  if (user_id) {
    sql += " WHERE user_id = ?";
    params.push(user_id);
  }
  const [rows] = await db.query(sql, params);
  return rows[0].total;
}
module.exports = {
  findAll,
  countAll,
};
