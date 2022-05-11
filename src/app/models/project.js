const mongose = require('mongoose')

const schema = mongose.Schema({
    _id: mongose.Schema.Types.ObjectId,
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = mongose.model('Project', schema)