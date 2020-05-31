'use strict'
var mongoose = require('mongoose'),
      conf = require('./db-conf'),
      Schema = mongoose.Schema,
      TemporalSchema = new Schema({
       nameH:"string",
       name:"string",
       nit:"string",
       lat:"string",
       lng:"string",
       time:"string",
       scan:"string"
     },{
         collection : "temporalHospital"
     }),
TemporalModel = mongoose.model("Temporal",TemporalSchema)

module.exports = TemporalModel