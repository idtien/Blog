const mongoose = require('mongoose');

async function connect () {

    try {
        await mongoose.connect('mongodb://127.0.0.1/blog')
        console.log('Connection successfully!!!')
    } catch (error) {
        console.log('error')
    }
}

module.exports = { connect }