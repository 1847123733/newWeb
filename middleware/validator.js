const response = require('../utils/response');

/**
 * 验证中间件
 */

/**
 * 验证注册参数
 */
const validateRegister = (req, res, next) => {
  const { userAccount, userPassword } = req.body;
  const errors = [];

  if (!userAccount || userAccount.trim() === '') {
    errors.push('账号不能为空');
  } else if (userAccount.length < 3 || userAccount.length > 50) {
    errors.push('账号长度必须在 3-50 个字符之间');
  }

  if (!userPassword || userPassword.trim() === '') {
    errors.push('密码不能为空');
  } else if (userPassword.length < 6) {
    errors.push('密码长度不能少于 6 个字符');
  }

  if (errors.length > 0) {
    return response.error(res, errors.join('; '), 400);
  }

  next();
};

/**
 * 验证登录参数
 */
const validateLogin = (req, res, next) => {
  const { userAccount, userPassword } = req.body;
  const errors = [];

  if (!userAccount || userAccount.trim() === '') {
    errors.push('账号不能为空');
  }

  if (!userPassword || userPassword.trim() === '') {
    errors.push('密码不能为空');
  }

  if (errors.length > 0) {
    return response.error(res, errors.join('; '), 400);
  }

  next();
};

module.exports = {
  validateRegister,
  validateLogin
};
