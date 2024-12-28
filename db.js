const mongoose= require('mongoose')
const express=require('express')

// const mongUrl= 'mongodb://localhost:27017/testing'      //this is the local mongodb connection
// const mongUrl='mongodb+srv://arunkumar11416:Qwerty12345@cluster0.rk6dl.mongodb.net/'   //this is the atlas connection
require('dotenv').config()
const mongUrl=process.env.DB_URL

mongoose.connect(mongUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})



const db= mongoose.connection

db.on('connected',()=>{
    console.log("db connection successful")
})

module.exports= db