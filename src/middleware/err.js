const err = function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.send('token失效, 请从新登录')
  }
  res.send('Error ' + err.message)
}

module.exports = {
  err
}