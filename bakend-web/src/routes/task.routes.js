'use strict'

const express = require('express'),
      Router = express.Router(),
      Hospital = require('../models/hospital'),
      Pacients = require('../models/pacients'),
      Temporal = require('../models/temporal'),
      fs = require('fs'),
      Users = require('../models/users'),
      nodemailer = require('nodemailer')
      
      

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'juanse0421@gmail.com',
        pass: 'pia042199'
    }
})





Router.get('/hospitals',async(req,res)=>{
    const hospital = await Hospital.find()
    res.json(hospital)
})

Router.post('/hospitals',async(req,res)=>{
   const {name, nit, availableBeds, covidSicks, lat, lng, address, emailAdmin, password} = req.body
    const hospital = new Hospital({name, nit, availableBeds, covidSicks, lat, lng, address, emailAdmin, password})
    await hospital.save()
    console.log(req.body)
    res.json({status:'Hospital was add'})
})

Router.get('/pacients',async(req,res)=>{
    const pacients = await Pacients.find()
    res.json(Pacients)
})

Router.post('/pacients',async(req,res)=>{
    const {name, nit,sick, location, hospital,symptoms, healtDates,  time} = req.body
    const pacients = new Pacients({name, nit,sick, location, hospital,symptoms, healtDates, time})
    await   pacients.save()
    res.json({status : 'Pacient was add'})
})

Router.get('/users',async(req,res)=>{
    const users = await Users.find()
    res.json(users)
})

Router.put('/users',async(req,res)=>{
    const {id} = req.body
    let objData
    console.log(req.body)
   Users.findById(id,(err,obj)=>{
        if(err) throw err
        //console.log(obj)
        objData = obj
    })
    res.json(objData)
 }
)

Router.post('/users',async(req,res)=>{
    const {name, nit, age, email, psw, phone, familiarPhone, city, location, address} = req.body
    const users = new Users({name, nit, age, email ,psw , phone, familiarPhone, city, location, address})
    var existing=false;
    await Users.findOne({nit:nit},(err,obj)=>{
        if(err) throw err
        if(obj !== null){
            existing = true
            var mailOptions = {
                from: 'atiendeMe',
                to: email,
                subject:'Codigo verificacion',
                text:'Here the verification code'
            }

            transporter.sendMail(mailOptions, (err,info)=>{
                if(err)
                console.log("email send")
                console.log(err)
            })
            
        }
    })
    if(existing){
        return res.json({status : 'user already exist'})
    }
    
    await users.save()
    return res.json({status : 'user was add'})
})


Router.put('/users/login',async(req,res)=>{

    const {nit, password} = req.body
    console.log(req.body)
    var validateUser = false , validatePassword =false, date
    await Users.findOne({nit:nit},(err,obj)=>{
        if(err) throw err
        if(obj){
            console.log(obj)
            validateUser = true;
            if(obj.psw === password){
                validatePassword = true
                date = obj
            }
        }        
    })

    if(validateUser === false){
        return res.json({status:'dont exist user'})
    }

    if(validatePassword === true){
     return res.json(date)
    }else{
        return res.json({status:'error password'})
    }


})

Router.get('/temporal',async function(req,res){
    const temporal = await Temporal.find()
    res.json(temporal)
})

Router.post('/temporal',async (req,res)=>{
    const {name, nit, age, hospital, dissease, time} = req.body
    const temporal = new Temporal({name, nit, age, hospital, dissease, time})
    await temporal.save()
})
/*
try{
Router.put('/temporal/:nit',async (req,res)=>{
    
Temporal.findOne({nit:req.params.nit},(err,nit)=>{
    if(nit){
       await Temporal.findOneAndRemove()
    }
    else{
        await Temporal.save()
    }
})
//   const temporal= await Temporal.findOne({nit:req.params.nit})
//   if(!temporal){
//       await temporal.save()
//   }
//   else{
//       await temporal.findOneAndRemove()
//   }
 })}catch(err){
     console.log('in bu')
 }*/
module.exports = Router