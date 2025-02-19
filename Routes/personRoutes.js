
const express=require('express')
const routes=express.Router()
const Person=require('../models/schems')



routes.post('/',async(req,res)=>{
    try{
    const data= req.body

    const newPerson= new Person(data)

    const response= await newPerson.save()

    console.log("data entered sucessfully")
    res.status(200).json(response)
    }catch{
        console.log("internal server error")
        res.status(500).json({err:"internal server error"})
    }
})

routes.get('/',async(req,res)=>{

    try{
        const getting= await Person.find()

        res.status(200).json(getting)

    }catch{
        res.send(500).json({erro:"internal server error"})
    }
})


routes.get('/:role',async(req,res)=>{

    try{
    const work= req.params.role

    if(work=='student' || work=='teacher'|| work=='staff'){
        const response= await Person.find({Role:work})

        res.status(200).json(response)
    }
    else{
        res.status(404).json({err:"ivalid work type"})
    }
    }catch{
        res.status(500).json({err:"cant fetch work details"})
    }
})

routes.put('/:id',async(req,res)=>{
    try{
        const updateId= req.params.id
        const uddateData=req.body


        
        const response= await Person.findByIdAndUpdate(updateId,uddateData,{
            new:true,   //run updated document
            runValidators:true  //run mongoose validator
        })

        if(!response){
           return  res.status(404).json({err:"person not found"})
        }

        res.status(200).json(response)
        
    }catch{
        res.status(500).json({err:"internal server error"})
    }
})


routes.delete('/:id',async(req,res)=>{

try{
    const dataDel= req.params.id      //req.params.id is used to fetch data send by client and id is just a variable it can be anything

    const response= await Person.findByIdAndDelete(dataDel)
    if(!response){
        return res.status(404).json({err:"person not found"})
    }
    res.status(200).json({mas:"person deleted succesfully"})
    
}catch(err){
    res.status(500).json({err:"internal server error"})
}

})

module.exports= routes