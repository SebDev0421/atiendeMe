'use strict'
var mongoose = require('mongoose'),
      conf = require('./db-conf'),
      Schema = mongoose.Schema,
      UserSchema = new Schema({
       name:"string",
       nit:"string",
       age:"string",
       email:"string",
       psw:"string",
       phone:"string",
       familiarPhone:"string",
       city:"string",
       location:{
           lat:"string",
           lng:"string"
       },
       address:"string"
     },{
         collection : "users"
     }),
UserModel = mongoose.model("Users",UserSchema)

module.exports = UserModel