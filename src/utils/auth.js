const jwt = require('jsonwebtoken')

const userExtractor = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]
  if (token == null) res.status(401).json({ error: 'Unauthorized' })

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' })
    req.user = user
    next()
  })
}

module.exports = { userExtractor }