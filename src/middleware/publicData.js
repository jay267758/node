const mv = function (req, res, next) {
  // 在req全局挂载 username
  // req.name = 'chenji';
  next()
}

module.exports = {
  mv
}

