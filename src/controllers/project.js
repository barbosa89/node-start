const mongoose = require('mongoose')
const Project = require('../models/project')

module.exports = {
    index: (req, res) => {
        Project
            .find()
            .then(projects => {
                res
                    .status(200)
                    .json({
                        projects
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
        Project
            .findById(req.params.id)
            .then(project => {
                res
                    .status(200)
                    .json({
                        project: project
                    })
            })
            .catch(error => {
                if (error.kind == 'ObjectId') {
                    res
                        .status(404)
                        .json({
                            message: 'Project not found'
                        })
                }

                res
                    .status(500)
                    .json({
                        message: 'Internal server error',
                        error: error
                    })
            })
    },
    update: (req, res) => {
        Project
            .findByIdAndUpdate(req.params.id, req.body)
            .then(project => {
                res
                    .status(200)
                    .json({
                        project: project
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
    delete: (req, res) => {
        Project
            .findByIdAndDelete(req.params.id)
            .then(project => {
                res
                    .status(200)
                    .json({
                        message: 'Record was deleted',
                        project: project
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
    upload: (req, res) => {
        res
            .status(200)
            .json({
                file: 'image'
            })
    }
}