'use strict'

const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const { cors } = require('./config/cors')
const mongo = require('./core/database/drivers/mongo')
const app = express()

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

fs.readdir(path.resolve('src/routes'), (_err, files) => {
    files.forEach(file => {
        let module = file.replace('.js', '')

        app.use(`/api/v1/${module}`, require('./routes/' + module))
    });
})

module.exports = app