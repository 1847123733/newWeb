const jwt = require('jsonwebtoken');

/**
 * JWT 工具类
 * 处理 Token 的生成和验证
 */
const jwtUtil = {
  /**
   * 生成 Token
   * @param {Object} payload Token 载荷
   * @param {string} expiresIn 过期时间
   * @returns {string} JWT Token
   */
  generateToken(payload, expiresIn = process.env.JWT_EXPIRES_IN || '7d') {
    const secret = process.env.JWT_SECRET || 'default_secret';
    return jwt.sign(payload, secret, { expiresIn });
  },

  /**
   * 验证 Token
   * @param {string} token JWT Token
   * @returns {Object|null} 解码后的载荷或 null
   */
  verifyToken(token) {
    try {
      const secret = process.env.JWT_SECRET || 'default_secret';
      return jwt.verify(token, secret);
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return null;
    }
  },

  /**
   * 解码 Token（不验证签名）
   * @param {string} token JWT Token
   * @returns {Object|null} 解码后的载荷或 null
   */
  decodeToken(token) {
    try {
      return jwt.decode(token);
    } catch (error) {
      return null;
    }
  }
};

module.exports = jwtUtil;
