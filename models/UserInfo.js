/**
 * 用户信息实体类
 * 对应数据库 user_info 表
 */
class UserInfo {
  constructor(data = {}) {
    this.id = data.id || null;
    this.userKey = data.user_key || data.userKey || '';
    this.userName = data.user_name || data.userName || '';
    this.userAccount = data.user_account || data.userAccount || '';
    this.userPassword = data.user_password || data.userPassword || '';
    this.userRole = data.user_role !== undefined ? data.user_role : 0; // 1: 超级管理员, 0: 普通用户
    this.creationTime = data.creation_time || data.creationTime || null;
    this.updateTime = data.update_time || data.updateTime || null;
  }

  /**
   * 转换为安全的对象（不包含密码）
   */
  toSafeObject() {
    return {
      id: this.id,
      userKey: this.userKey,
      userName: this.userName,
      userAccount: this.userAccount,
      userRole: this.userRole,
      creationTime: this.creationTime,
      updateTime: this.updateTime
    };
  }

  /**
   * 是否为超级管理员
   */
  isAdmin() {
    return this.userRole === 1;
  }

  /**
   * 从数据库行创建实例
   */
  static fromRow(row) {
    if (!row) return null;
    return new UserInfo(row);
  }
}

module.exports = UserInfo;
