'use strict'
const bcrypt=require('bcrypt');
const express =require('express');
const {users} = require('../../models/index.js');// get the model from the export in index.js

const router = express.Router(); //get method router 

//routs
router.post('/signUp',createUser);
router.get('/signUp',getusers);

// localhost:3000/clothes
async function getusers(req,res) {
  let alluser = await users.readRecord();//get model that we impot it from index.js
  res.status(200).json(alluser);
}
//----------------------------------------------------
//hashing
function encrypt(pass){
  let hash=bcrypt.hash(pass,5);
  return hash;}
//----------------------------------------------------
async function createUser(req,res) {
  try{
    /*"firstName":"sara",
   "lastName":"makhluof",
    "mobileNumber": "0790248105" ,
    "email":"sara@yahoo.com",
    "password": "123test"
 }*/
  let {firstName,lastName,mobileNumber,email,password,role} = req.body;//take the body from the postman 
  console.log({firstName:firstName,lastName:lastName,mobileNumber:mobileNumber, email:email ,password:await encrypt(password)})
  let postUser = await users.createRecord({firstName:firstName,lastName:lastName,mobileNumber:mobileNumber, email:email,password:await encrypt(password),role:role});//let new inside this var(imagin it like new row)
  res.status(201).json(postUser);}
  catch(e){console.log("problem in create user")}
}


module.exports=router;