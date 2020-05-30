'use strict'
var mongoose = require('mongoose'),
      conf = require('./db-conf'),
      Schema = mongoose.Schema,
      HospitalSchema = new Schema({
       name:"string",
       nit:"string",
       availableBeds:"string",
       covidSicks:"string",
       lat:"string",
       lng:"string",
       address:"string",
       emailAdmin:'',
       password:''
     },{
         collection : "hospital"
     }),
HospitalModel = mongoose.model("Hospitals",HospitalSchema)

module.exports = HospitalModel
