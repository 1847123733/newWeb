const express = require('express');
const router = express.Router();
const configController = require('../controllers/configController');
const authMiddleware = require('../middleware/auth');

/**
 * 用户配置路由
 * 所有路由都需要认证
 */

router.use(authMiddleware);

// 获取用户配置
router.post('/get', configController.get);

// 新增用户配置
router.post('/add', configController.create);

// 更新用户配置
router.post('/update', configController.update);

module.exports = router;
