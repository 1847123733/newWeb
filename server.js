require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// 导入路由
const authRoutes = require('./routes/auth');
const visitRoutes = require('./routes/visit');
const configRoutes = require('./routes/config');

const app = express();

const SUB_PATH = process.env.SUB_PATH || 'api';

// CORS 中间件
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// 中间件配置
app.use(morgan('dev')); // 日志
app.use(express.json()); // 解析 JSON
app.use(express.urlencoded({ extended: true })); // 解析 URL 编码
app.use(cookieParser()); // 解析 Cookie

// 路由配置
app.use(`/${SUB_PATH}/auth`, authRoutes);
app.use(`/${SUB_PATH}/visit`, visitRoutes);
app.use(`/${SUB_PATH}/config`, configRoutes);

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 处理
app.use((req, res) => {
  res.status(404).json({ code: 404, message: '接口不存在' });
});

// 全局错误处理
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    code: err.status || 500,
    message: err.message || '服务器内部错误'
  });
});
// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器已启动，端口: ${PORT}`);
  console.log(`环境: ${process.env.NODE_ENV || 'development'}`);
});
