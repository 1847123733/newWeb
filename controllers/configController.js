const configService = require('../services/configService');
const response = require('../utils/response');

/**
 * 用户配置控制器
 */
const configController = {
  /**
   * 获取用户配置
   * GET /api/config
   */
  async get(req, res, next) {
    try {
      const userKey = req.user.userKey;
      const result = await configService.getConfig(userKey);
      return response.success(res, result.data, result.message);
    } catch (error) {
      next(error);
    }
  },

  /**
   * 新增用户配置
   * POST /api/config
   */
  async create(req, res, next) {
    try {
      const userKey = req.user.userKey;
      const { json } = req.body;

      const result = await configService.createConfig(userKey, json);

      if (result.success) {
        return response.success(res, null, result.message);
      } else {
        return response.error(res, result.message, 400);
      }
    } catch (error) {
      next(error);
    }
  },

  /**
   * 更新用户配置
   * PUT /api/config
   */
  async update(req, res, next) {
    try {
      const userKey = req.user.userKey;
      const { json } = req.body;

      const result = await configService.updateConfig(userKey, json);

      if (result.success) {
        return response.success(res, null, result.message);
      } else {
        return response.error(res, result.message, 400);
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = configController;
