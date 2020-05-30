'use strict'
var mongoose = require('mongoose'),
      conf = require('./db-conf'),
      Schema = mongoose.Schema,
      PacientSchema = new Schema({
       name:"string",
       nit:"string",
       sick:"string",
       location:{
        lat:"string",
        lng:"string",
       },
       hospital:"string",
       symptoms:"string",
       healtDates:{
           temp:"string",
           pulse:"string",
           tension:"string",
       },
       time:"string"
     },{
         collection : "pacients"
     }),
PacientModel = mongoose.model("Pacients",PacientSchema)

module.exports = PacientModel