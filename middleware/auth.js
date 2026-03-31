const jwtUtil = require('../utils/jwt');
const userInfoDao = require('../dao/userInfoDao');
const response = require('../utils/response');

/**
 * 认证中间件
 * 验证 JWT Token
 */
const authMiddleware = async (req, res, next) => {
  try {
    // 从 Header 或 Cookie 获取 Token
    let token = req.headers.authorization;

    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7);
    } else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return response.error(res, '请先登录', 401);
    }

    // 验证 Token
    const decoded = jwtUtil.verifyToken(token);

    if (!decoded) {
      return response.error(res, 'Token 无效或已过期', 401);
    }

    // 获取用户信息
    const user = await userInfoDao.findById(decoded.id);

    if (!user) {
      return response.error(res, '用户不存在', 401);
    }

    // 将用户信息添加到请求对象
    req.user = user.toSafeObject();
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return response.error(res, '认证失败', 401);
  }
};

module.exports = authMiddleware;
