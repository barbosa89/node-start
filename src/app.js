'use strict'

const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/init')

// Init express app
const app = express()

// Import routes
const projectRoutes = require('./routes/projects')

// Mongo database connection
config.connect()

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors)
app.use(morgan('dev'))

// Default route
app.get('/', (req, res) => {
    res
        .status(200)
        .json({
            message: 'Ok'
        })
})

// Use routes
app.use('/api/v1', projectRoutes)

module.exports = app