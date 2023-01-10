const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.send({
    code: 200,
    data: req.query,
    msg: '成功'
  })
});

module.exports = router