'use strict'

const express = require('express'),
      app = express(),
      port = (process.env.PORT || 5000),
      publicDir = `${__dirname}/public`,
      morgan = require('morgan'),
      Routes = require('./routes/task.routes'),
      moongoose = require('./database'),
      path = require('path')

//settings

app.set('port',port)

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//Routes
app.use('/api',Routes)
app.use(express.static(path.join(__dirname,'/public')));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});
//server start
app.listen(app.get('port'),()=>{
    console.log('Server newton code running in port: ',app.get('port'))
})
