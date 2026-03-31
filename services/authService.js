const userInfoDao = require('../dao/userInfoDao');
const jwtUtil = require('../utils/jwt');
const crypto = require('crypto');

/**
 * 认证服务
 */
const authService = {
  /**
   * 生成 8 位随机 userKey
   */
  generateUserKey() {
    return crypto.randomBytes(4).toString('hex');
  },

  /**
   * 密码加密
   */
  hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  },

  /**
   * 验证密码
   */
  verifyPassword(password, hashedPassword) {
    return this.hashPassword(password) === hashedPassword;
  },

  /**
   * 用户注册
   */
  async register(userData) {
    const { userName, userAccount, userPassword } = userData;

    // 检查账号是否已存在
    const existingUser = await userInfoDao.findByAccount(userAccount);
    if (existingUser) {
      return { success: false, message: '账号已存在' };
    }

    // 创建用户
    const userKey = this.generateUserKey();
    const hashedPassword = this.hashPassword(userPassword);
    
    const userId = await userInfoDao.create({
      userKey,
      userName,
      userAccount,
      userPassword: hashedPassword,
      userRole: 0
    });

    const newUser = await userInfoDao.findById(userId);
    return {
      success: true,
      message: '注册成功',
      data: newUser.toSafeObject()
    };
  },

  /**
   * 用户登录
   */
  async login(userAccount, userPassword) {
    const user = await userInfoDao.findByAccount(userAccount);

    if (!user) {
      return { success: false, message: '账号或密码错误' };
    }

    if (!this.verifyPassword(userPassword, user.userPassword)) {
      return { success: false, message: '账号或密码错误' };
    }

    // 生成 Token
    const token = jwtUtil.generateToken({
      id: user.id,
      userKey: user.userKey,
      userAccount: user.userAccount,
      userRole: user.userRole
    });

    return {
      success: true,
      message: '登录成功',
      data: {
        user: user.toSafeObject(),
        token
      }
    };
  }
};

module.exports = authService;
