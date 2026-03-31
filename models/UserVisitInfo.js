/**
 * 用户访问信息实体类
 * 对应数据库 user_visit_info 表
 */
class UserVisitInfo {
  constructor(data = {}) {
    this.id = data.id || null;
    this.userKey = data.user_key || data.userKey || '';
    this.userIp = data.user_ip || data.userIp || '';
    this.userTime = data.user_time || data.userTime || 0;
    this.userPlatform = data.user_platform || data.userPlatform || '';
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
      userIp: this.userIp,
      userTime: this.userTime,
      userPlatform: this.userPlatform,
      creationTime: this.creationTime,
      updateTime: this.updateTime
    };
  }

  /**
   * 从数据库行创建实例
   */
  static fromRow(row) {
    if (!row) return null;
    return new UserVisitInfo(row);
  }
}

module.exports = UserVisitInfo;
