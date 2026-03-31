const { pool } = require('../config/database');
const UserInfo = require('../models/UserInfo');

/**
 * 用户信息数据访问对象
 */
const userInfoDao = {
  /**
   * 根据 ID 查询用户
   */
  async findById(id) {
    const [rows] = await pool.execute(
      'SELECT * FROM user_info WHERE id = ?',
      [id]
    );
    return UserInfo.fromRow(rows[0]);
  },

  /**
   * 根据 userKey 查询用户
   */
  async findByUserKey(userKey) {
    const [rows] = await pool.execute(
      'SELECT * FROM user_info WHERE user_key = ?',
      [userKey]
    );
    return UserInfo.fromRow(rows[0]);
  },

  /**
   * 根据账号查询用户
   */
  async findByAccount(userAccount) {
    const [rows] = await pool.execute(
      'SELECT * FROM user_info WHERE user_account = ?',
      [userAccount]
    );
    return UserInfo.fromRow(rows[0]);
  },

  /**
   * 创建用户
   */
  async create(userData) {
    const { userKey, userName, userAccount, userPassword, userRole } = userData;
    const [result] = await pool.execute(
      `INSERT INTO user_info (user_key, user_name, user_account, user_password, user_role, creation_time, update_time) 
       VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
      [userKey, userName || '', userAccount, userPassword, userRole || 0]
    );
    return result.insertId;
  },

  /**
   * 更新用户
   */
  async update(id, userData) {
    const fields = [];
    const values = [];

    if (userData.userName !== undefined) {
      fields.push('user_name = ?');
      values.push(userData.userName);
    }
    if (userData.userPassword !== undefined) {
      fields.push('user_password = ?');
      values.push(userData.userPassword);
    }
    if (userData.userRole !== undefined) {
      fields.push('user_role = ?');
      values.push(userData.userRole);
    }

    if (fields.length === 0) return false;

    fields.push('update_time = NOW()');
    values.push(id);

    const [result] = await pool.execute(
      `UPDATE user_info SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    return result.affectedRows > 0;
  }
};

module.exports = userInfoDao;
