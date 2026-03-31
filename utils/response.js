/**
 * 统一响应工具
 * 封装 API 响应格式
 */
const response = {
  /**
   * 成功响应
   * @param {Object} res Express 响应对象
   * @param {*} data 响应数据
   * @param {string} message 响应消息
   * @param {number} code 状态码
   */
  success(res, data = null, message = '操作成功', code = 200) {
    return res.status(code).json({
      code: 0,
      message,
      data
    });
  },

  /**
   * 错误响应
   * @param {Object} res Express 响应对象
   * @param {string} message 错误消息
   * @param {number} statusCode HTTP 状态码
   * @param {number} code 业务错误码
   */
  error(res, message = '操作失败', statusCode = 400, code = -1) {
    return res.status(statusCode).json({
      code,
      message,
      data: null
    });
  },

  /**
   * 分页响应
   * @param {Object} res Express 响应对象
   * @param {Array} list 数据列表
   * @param {number} total 总数
   * @param {number} page 当前页
   * @param {number} pageSize 每页数量
   * @param {string} message 响应消息
   */
  page(res, list, total, page, pageSize, message = '获取成功') {
    return res.json({
      code: 0,
      message,
      data: {
        list,
        pagination: {
          total,
          page,
          pageSize,
          totalPages: Math.ceil(total / pageSize)
        }
      }
    });
  }
};

module.exports = response;
