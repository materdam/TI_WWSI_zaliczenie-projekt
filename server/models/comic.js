const mongoose = require('mongoose');

const comicSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    contact:{ //pages
        type:String,
        default:'n/a'
    },
    nick:{  //rating
        type:String,
        required:true
    },
    city:{ //price
        type:String,
        default:'n/a'
    }
},{timestamps:true})

const Comic = mongoose.model('Comic', comicSchema )

module.exports = { Comic }