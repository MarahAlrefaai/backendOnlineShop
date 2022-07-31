'use strict'
const express =require('express');
const router=express.Router();//get method router
const {users}=require('../models/index.js')

// routes

router.get('/users',getAllUsers);
router.get('/users/:id',getOneUser);
router.post('/users',createUser);
router.delete("/user/:id",deleteUser);
router.put("/user.id",updateUser)

async function getAllUsers(req,res) {
    let allusers = await users.findAll();//get model that we impot it from index.js
    res.status(200).json(allusers);
}

// localhost:3000/food (body:{firstName:'razan',lastName:'quran'})
async function createUser(req,res) {
    let newusers = req.body;//that we will add it from postman
    let postusers = await users.create(newusers);//let new inside this var(imagin it like new row)
    res.status(201).json(postusers);
}

// localhost:3000/food/2 
async function getOneUser(req,res) {
    let id = parseInt(req.params.id);
    let specificusers = await users.findOne({where:{id:id}})//finde specific users using id 
    res.json(specificusers);
}
async function deleteUser(req,res){
    let deleteId = parseInt(req.params.id);
    let deletedUser = await users.destroy({where:{id:deleteId}});
    res.status(204).json(deletedUser);
  }
  
  async function updateUser(req,res){
    let id = req.params.id; 
    let body =req.body;
    let userWanted = await storesCategory.findOne({where:{id:id}});
       const UpdatedUser = await userWanted.update(body);
       res.status(201).json(UpdatedSUser);
   }

module.exports=router;
