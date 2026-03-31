const { pool } = require('../config/database');
const UserConfig = require('../models/UserConfig');

/**
 * 用户配置数据访问对象
 */
const userConfigDao = {
  /**
   * 根据 userKey 查询配置
   */
  async findByUserKey(userKey) {
    const [rows] = await pool.execute(
      'SELECT * FROM user_new_web_configuration WHERE user_key = ?',
      [userKey]
    );
    return UserConfig.fromRow(rows[0]);
  },

  /**
   * 新增配置
   */
  async create(configData) {
    const { userKey, json } = configData;
    const [result] = await pool.execute(
      `INSERT INTO user_new_web_configuration (user_key, json, creation_time, update_time) 
       VALUES (?, ?, NOW(), NOW())`,
      [userKey, json || '']
    );
    return result.insertId;
  },

  /**
   * 更新配置
   */
  async updateByUserKey(userKey, json) {
    const [result] = await pool.execute(
      `UPDATE user_new_web_configuration SET json = ?, update_time = NOW() WHERE user_key = ?`,
      [json, userKey]
    );
    return result.affectedRows > 0;
  }
};

module.exports = userConfigDao;
