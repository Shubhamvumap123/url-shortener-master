const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema

const urlSchema = new Schema({
    url : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
        required : true,
        unique : true
    }
})

// Export schema
module.exports = URL = mongoose.model('mongodb+srv://shubhamvumap123:@cluster0.6si8c.mongodb.net/test', urlSchema)