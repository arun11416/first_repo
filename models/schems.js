
const mongoose=require('mongoose')


const person= mongoose.Schema({


    Name:{
        type:String,
        required:true
    },

    Age:{
        type:Number,
        required:true
    },

    Gender:{
        type:String,
        required:false
    },

    Role:{
        type:String,
        enum:['student','teacher','staff'],
        required:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    }

})


module.exports= mongoose.model('Person',person)