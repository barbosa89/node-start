'use strict'

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
app.use(config.cors)

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