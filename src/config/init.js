const mongoose = require('mongoose')
const { mongoUrl } = require('./index')

module.exports = {
    connect: async () => {
        mongoose
            .connect(mongoUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log('Conected to MongoDB.'))
            .catch(error => console.log(error))

        mongoose.Promise = global.Promise
    }
}