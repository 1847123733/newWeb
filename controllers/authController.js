const authService = require('../services/authService');
const response = require('../utils/response');

/**
 * 认证控制器
 */
const authController = {
  /**
   * 用户注册
   * POST /api/auth/register
   */
  async register(req, res, next) {
    try {
      const { userName, userAccount, userPassword } = req.body;

      const result = await authService.register({ userName, userAccount, userPassword });

      if (result.success) {
        return response.success(res, result.data, result.message);
      } else {
        return response.error(res, result.message, 400);
      }
    } catch (error) {
      next(error);
    }
  },

  /**
   * 用户登录
   * POST /api/auth/login
   */
  async login(req, res, next) {
    try {
      const { userAccount, userPassword } = req.body;

      const result = await authService.login(userAccount, userPassword);

      if (result.success) {
        res.cookie('token', result.data.token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
          sameSite: 'strict'
        });

        return response.success(res, result.data, result.message);
      } else {
        return response.error(res, result.message, 401);
      }
    } catch (error) {
      next(error);
    }
  },

  /**
   * 用户登出
   * POST /api/auth/logout
   */
  async logout(req, res, next) {
    try {
      res.clearCookie('token');
      return response.success(res, null, '登出成功');
    } catch (error) {
      next(error);
    }
  },

  /**
   * 获取当前用户信息
   * GET /api/auth/me
   */
  async me(req, res, next) {
    try {
      const user = req.user;
      return response.success(res, user, '获取成功');
    } catch (error) {
      next(error);
    }
  }
};

module.exports = authController;
