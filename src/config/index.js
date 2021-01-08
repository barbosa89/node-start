const dotenv = require('dotenv')

dotenv.config()

const database = require('./database')

module.exports = {
    name: process.env.APP_NAME,
    url: process.env.APP_URL,
    port: process.env.APP_PORT,
    mongoUrl: database.getConnection()
}