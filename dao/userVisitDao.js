const { pool } = require('../config/database');
const UserVisitInfo = require('../models/UserVisitInfo');

/**
 * 用户访问信息数据访问对象
 */
const userVisitDao = {
  /**
   * 查询所有访问记录（分页）
   */
  async findAll(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;

    const [rows] = await pool.execute(
      'SELECT * FROM user_visit_info ORDER BY creation_time DESC LIMIT ? OFFSET ?',
      [String(pageSize), String(offset)]
    );

    const [countResult] = await pool.execute(
      'SELECT COUNT(*) as total FROM user_visit_info'
    );

    return {
      list: rows.map(row => UserVisitInfo.fromRow(row)),
      total: countResult[0].total
    };
  },

  /**
   * 根据 userKey 查询访问记录
   */
  async findByUserKey(userKey) {
    const [rows] = await pool.execute(
      'SELECT * FROM user_visit_info WHERE user_key = ?',
      [userKey]
    );
    return UserVisitInfo.fromRow(rows[0]);
  },

  /**
   * 新增访问记录
   */
  async create(visitData) {
    const { userKey, userIp, userPlatform } = visitData;
    const [result] = await pool.execute(
      `INSERT INTO user_visit_info (user_key, user_ip, user_time, user_platform, creation_time, update_time) 
       VALUES (?, ?, 1, ?, NOW(), NOW())`,
      [userKey, userIp || '', userPlatform || '']
    );
    return result.insertId;
  },

  /**
   * 更新访问次数（累加）
   */
  async incrementVisitTime(userKey) {
    const [result] = await pool.execute(
      `UPDATE user_visit_info SET user_time = user_time + 1, update_time = NOW() WHERE user_key = ?`,
      [userKey]
    );
    return result.affectedRows > 0;
  }
};

module.exports = userVisitDao;
