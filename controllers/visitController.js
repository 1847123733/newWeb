const visitService = require('../services/visitService');
const response = require('../utils/response');

/**
 * 用户访问控制器
 */
const visitController = {
  /**
   * 获取访问记录列表（仅超级管理员）
   * GET /api/visit
   */
  async list(req, res, next) {
    try {
      // 检查是否为超级管理员
      if (req.user.userRole !== 1) {
        return response.error(res, '无权限访问', 403);
      }

      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 10;

      const result = await visitService.getVisitList(page, pageSize);
      return response.success(res, result.data, result.message);
    } catch (error) {
      next(error);
    }
  },

  /**
   * 记录用户访问
   * POST /api/visit
   */
  async record(req, res, next) {
    try {
      const userKey = req.user.userKey;
      const userIp = req.ip || req.headers['x-forwarded-for'] || '';
      const userPlatform = req.headers['user-agent'] || '';

      const result = await visitService.recordVisit({ userKey, userIp, userPlatform });

      if (result.success) {
        return response.success(res, result.data, result.message);
      } else {
        return response.error(res, result.message, 400);
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = visitController;
