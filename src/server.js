'use strict'

const dotenv = require('dotenv')

dotenv.config()

const app = require('./app')
const config = require('./config/app')

app.listen(config.port, config.url, () => {
    console.log(`${config.name} is running on http://${config.url}:${config.port}`)
})