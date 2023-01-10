const express = require('express');
const router = express.Router();
// 定义token 加密（适用于前后端分离项目）
const jwt = require('jsonwebtoken');
const secretKey = require('../utils/secretKey');

router.get('/user', (req, res) => {
  res.send({
    code: 200,
    data: req.query,
    msg: '成功'
  })
});

// 登录接口
router.post('/login', (req, res) => {
  // 获取 body 或 x-www-form-urlencoded 请求体发送的数据
  const body = req.body;
  console.log(body)
  const token = jwt.sign({
    username: body.name // 用户的信息对象进行加密
  },
  secretKey,  // 设置密钥
  {
    expiresIn: '30s'  // 设置密钥
  })
  res.send({
    code: 200,
    data: body,
    msg: '登录成功',
    token: 'Bearer ' + token
  })
})

module.exports = router;