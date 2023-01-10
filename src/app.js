const express = require('express');
// 路由
const router = require('./router');
// 中间件
const middleware = require('./middleware');
// 对jwt进行解密
const { expressjwt } = require('express-jwt')
const secretKey = require('./utils/secretKey');

const app = express();
// 解析 将jwt加密字符串还原成 JSON 对象的中间件
// unless 指定哪些接口开头的不需要进行加密
app.use(expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\/user\//] }))
// 处理客户端发送的 json数据，通过 req.body 获取(不加为 {})
app.use(express.json());
// 处理客户端发送的 x-www-form-urlencoded 数据，通过 req.body 获取 (不加为 {})
app.use(express.urlencoded({ extended: false }));
app.use(middleware.publicData.mv);
app.use('/api/user', router.user);
app.use('/api/v1', router.form);
app.use(middleware.err.err);

// 开启服务器
app.listen(8080, () => {
  console.log('express server running at http://127.0.0.1:8080')
});
