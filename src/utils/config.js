if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const DB_URI = process.env.NODE_ENV === 'test' ? process.env.TEST_DB_URI : process.env.DB_URI

module.exports = {
  DB_URI
}