// basic node project
const express= require('express')
const db=require('./db')
const Person=require('./models/schems')
const bodyParser=require('body-parser')
const personroute= require('./Routes/personRoutes')
require('dotenv').config()
const app= express()
app.use(bodyParser.json())

const PORT= process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('yes,it is working')
})

app.get('/newpage',(req,res)=>{
    res.send("this is the second page ")
})


app.use('/person',personroute)

app.listen(PORT,()=>{
    console.log("connected to server succesfully")
})


