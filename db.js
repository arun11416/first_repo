const mongoose= require('mongoose')
const express=require('express')

const mongUrl= 'mongodb://localhost:27017/testing'



mongoose.connect(mongUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})



const db= mongoose.connection

db.on('connected',()=>{
    console.log("db connection successful")
})

module.exports= db