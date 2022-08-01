'use strict'
const express =require('express');
const router=express.Router();//get method router
const {users}=require('../models/index.js')

// routes

router.get('/users',getAllUsers);
router.get('/users/:id',getOneUser);
router.post('/users',createUser);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser)

async function getAllUsers(req,res) {
    let allusers = await users.readRecord();//get model that we impot it from index.js
    res.status(200).json(allusers);
}

// localhost:3005/users (body:{firstName:'razan',lastName:'quran'})
async function createUser(req,res) {
    let newusers = req.body;//that we will add it from postman
    let postusers = await users.createRecord(newusers);//let new inside this var(imagin it like new row)
    res.status(201).json(postusers);
}

// localhost:3005/users/2 
async function getOneUser(req,res) {
    let id = parseInt(req.params.id);
    let specificusers = await users.readRecord(id)//finde specific users using id 
    res.json(specificusers);
}
async function deleteUser(req,res){
    let deleteId = parseInt(req.params.id);
    let deletedUser = await users.deleteRecord(deleteId);
    res.status(204).json(deletedUser);


    
  }
  
  async function updateUser(req,res){
    let id = req.params.id; 
    
    let body =req.body;
   
       const UpdatedUser = await users.updateRecord(body,id);
       res.status(201).json(UpdatedUser);
   }

module.exports=router;
