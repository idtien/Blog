const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    name: {type: String},
    description: {type: String},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Post', Post)