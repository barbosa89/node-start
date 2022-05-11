'use strict'

const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const { cors } = require('./config/cors')
const mongo = require('./core/database/drivers/mongo')

const app = express()

const projectRoutes = require('./routes/projects')

mongo.connect()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors)
app.use(morgan('dev'))

app.get('/', (_req, res) => {
    res
        .status(200)
        .json({
            message: 'Ok'
        })
})

app.use('/api/v1', projectRoutes)

module.exports = app