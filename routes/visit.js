const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');
const authMiddleware = require('../middleware/auth');

/**
 * 用户访问路由
 * 所有路由都需要认证
 */

router.use(authMiddleware);

// 获取访问记录列表（仅超级管理员）
router.post('/list', visitController.list);

// 记录用户访问
router.post('/record', visitController.record);

module.exports = router;
