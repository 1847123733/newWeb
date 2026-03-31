/**
 * 用户配置实体类
 * 对应数据库 user_new_web_configuration 表
 */
class UserConfig {
  constructor(data = {}) {
    this.id = data.id || null;
    this.userKey = data.user_key || data.userKey || '';
    this.json = data.json || '';
    this.creationTime = data.creation_time || data.creationTime || null;
    this.updateTime = data.update_time || data.updateTime || null;
  }

  /**
   * 转换为普通对象
   */
  toObject() {
    return {
      id: this.id,
      userKey: this.userKey,
      json: this.json,
      creationTime: this.creationTime,
      updateTime: this.updateTime
    };
  }

  /**
   * 获取解析后的 JSON 配置
   */
  getParsedJson() {
    try {
      return this.json ? JSON.parse(this.json) : {};
    } catch (e) {
      return {};
    }
  }

  /**
   * 从数据库行创建实例
   */
  static fromRow(row) {
    if (!row) return null;
    return new UserConfig(row);
  }
}

module.exports = UserConfig;
