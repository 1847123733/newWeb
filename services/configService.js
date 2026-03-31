const userConfigDao = require('../dao/userConfigDao');

/**
 * 用户配置服务
 */
const configService = {
  /**
   * 获取用户配置
   */
  async getConfig(userKey) {
    const config = await userConfigDao.findByUserKey(userKey);

    if (!config) {
      return {
        success: true,
        message: '暂无配置',
        data: null
      };
    }

    return {
      success: true,
      message: '获取成功',
      data: config.toObject()
    };
  },

  /**
   * 新增用户配置
   */
  async createConfig(userKey, json) {
    // 检查是否已存在
    const existingConfig = await userConfigDao.findByUserKey(userKey);
    if (existingConfig) {
      return { success: false, message: '配置已存在，请使用更新接口' };
    }

    const jsonStr = typeof json === 'string' ? json : JSON.stringify(json);
    await userConfigDao.create({ userKey, json: jsonStr });

    return {
      success: true,
      message: '配置创建成功'
    };
  },

  /**
   * 更新用户配置
   */
  async updateConfig(userKey, json) {
    const existingConfig = await userConfigDao.findByUserKey(userKey);
    
    if (!existingConfig) {
      // 不存在则创建
      return this.createConfig(userKey, json);
    }

    const jsonStr = typeof json === 'string' ? json : JSON.stringify(json);
    await userConfigDao.updateByUserKey(userKey, jsonStr);

    return {
      success: true,
      message: '配置更新成功'
    };
  }
};

module.exports = configService;
