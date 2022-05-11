const mongoose = require('mongoose')
const { connection, connections } = require('../../../config/database')

const mongo = connections[connection]

mongoose.Promise = global.Promise

function setup() {
    const url = 'mongodb://'

    if (mongo.user && mongo.pass) {
        url.concat(`${mongo.user}:${mongo.pass}@`)
    }

    return url.concat(`${mongo.host}:${mongo.port}/${mongo.database}`)
}

function connect() {
    mongoose
        .connect(setup(), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('Conected to MongoDB')
        })
        .catch(error => {
            console.log(error.message)
        })
}

module.exports = {
    connect
}