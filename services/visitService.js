const userVisitDao = require('../dao/userVisitDao');

/**
 * 用户访问服务
 */
const visitService = {
  /**
   * 获取访问记录列表（仅超级管理员）
   */
  async getVisitList(page = 1, pageSize = 10) {
    const result = await userVisitDao.findAll(page, pageSize);

    return {
      success: true,
      message: '获取成功',
      data: {
        list: result.list.map(item => item.toObject()),
        total: result.total,
        page,
        pageSize
      }
    };
  },

  /**
   * 记录用户访问
   */
  async recordVisit(visitData) {
    const { userKey, userIp, userPlatform } = visitData;

    // 检查是否已有记录
    const existingRecord = await userVisitDao.findByUserKey(userKey);

    if (existingRecord) {
      // 更新访问次数
      await userVisitDao.incrementVisitTime(userKey);
      return {
        success: true,
        message: '访问记录已更新',
        data: { userKey, visitCount: existingRecord.userTime + 1 }
      };
    } else {
      // 新增记录
      await userVisitDao.create({ userKey, userIp, userPlatform });
      return {
        success: true,
        message: '访问记录已创建',
        data: { userKey, visitCount: 1 }
      };
    }
  }
};

module.exports = visitService;
