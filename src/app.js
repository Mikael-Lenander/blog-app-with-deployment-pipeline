const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')

const config = require('./utils/config')
const middleware = require('./utils/middleware')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const authRouter = require('./controllers/auth')

mongoose.connect(config.DB_URI)
morgan.token('body', function (req) { return JSON.stringify(req.body) })

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  app.use(express.static('build'))
}

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use('/api', authRouter)
app.use('/api/users', userRouter)
app.use('/api/blogs', blogRouter)


if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use(middleware.errorHandler)

module.exports = app