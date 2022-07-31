'use strict'
const express =require("express");

const app=express();//to use express methods and libraries
const errorHandler = require('./error-handlers/500.js')
const cors=require("cors")
const notFound = require('./error-handlers/404.js')
const userRouter=require("./routes/users.js")
const storesCategoryRouter=require('./routes/storesCategory.js')
app.use(cors());
app.use(express.json());//this route to identify body 
// app.use(errorHandler);
// app.use(notFound);
app.use(userRouter);
app.use(storesCategoryRouter);
app.get('/',(req,res)=>{//this is a rout
  //res.json({method : req.reqType, });
  res.send('home route');
})

function start(port){
  app.listen(port,()=>{
    console.log(`running on port ${port}`)
  }) 
}
//now we need to export app and start 
//so we can import it anyware and use it 
module.exports={
  app:app,
  start:start
}


