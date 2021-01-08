const mongoose = require('mongoose')
const Project = require('../models/project')

module.exports = {
    index: (req, res) => {
        res
            .status(200)
            .json({
                message: 'Project Index'
            })
    },
    store: (req, res) => {
        const project = new Project({
            _id: new mongoose.Types.ObjectId(),
            description: req.body.description,
            url: req.body.url
        })

        project
            .save()
            .then(record => {
                res
                    .status(200)
                    .json({
                        project: record
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        message: 'Internal server error',
                        error: error
                    })
            })
    },
    show: (req, res) => {
        res
            .status(200)
            .json({
                message: 'Project Show'
            })
    },
    update: (req, res) => {
        res
            .status(200)
            .json({
                message: 'Project update'
            })
    },
    delete: (req, res) => {
        res
            .status(200)
            .json({
                message: 'Project delete'
            })
    }
}