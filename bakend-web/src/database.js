'use strict'

const mongoose = require('mongoose'),
      URI = 'mongodb://localhost/hackNewtonCode'

mongoose.connect(URI)
        .then((db)=>{
            console.log('data base was connected')
        })
        .catch((err)=>{
            console.error(err)
        })

mongoose.set('useFindAndModify',false)

module.exports = mongoose