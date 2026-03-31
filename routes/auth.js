const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');
const { validateRegister, validateLogin } = require('../middleware/validator');

/**
 * 认证路由
 */

// 用户注册
router.post('/register', validateRegister, authController.register);

// 用户登录
router.post('/login', validateLogin, authController.login);

// 用户登出
router.post('/logout', authController.logout);

// 获取当前用户信息（需要认证）
router.get('/me', authMiddleware, authController.me);

module.exports = router;
