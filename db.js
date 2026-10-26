const mongoose = require('mongoose')

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('connected to the database')
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB