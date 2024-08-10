const express=require('express')
const router=express.Router()
const Blood=require('../Model/details.model')
router.post('/',(req,res)=>{
    let newOne=new Blood({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        location:req.body.location,
        bloodgroup:req.body.bloodgroup,
        phonenumber:req.body.phonenumber
    })
    newOne.save()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        req.send(err)
    })
})
router.get('/',(req,res)=>{
    Blood.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})


module.exports=router