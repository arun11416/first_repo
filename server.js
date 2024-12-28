
const express= require('express')
const db=require('./db')
const Person=require('./models/schems')
const bodyParser=require('body-parser')
const personroute= require('./Routes/personRoutes')
const app= express()
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('yes,it is working')
})

app.use('/person',personroute)

app.listen(3000,()=>{
    console.log("connected to server succesfully")
})


