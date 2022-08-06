'use strict'
const express =require('express');
const router=express.Router();//get method router
const {users}=require('../models/index.js')
const {orders}=require('../models/index.js')
// routes

router.get('/users',getAllUsers);
router.get('/users/:id',getOneUser);
router.post('/users',createUser);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser)
router.get('/userorders/:id',userorders);

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

   async function userorders(req,res){
    console.log(orders)
    let id = parseInt(req.params.id);
    let ordersOfUser = await users.readordersForspicificUser(orders);//get model that we impot it from index.js
    //this for loop to get store of specific category 
        const ordersOfUser2 = ordersOfUser.filter(myFunction);
        function myFunction(value, index, array) {
          if(value.id == id){
            return value.orders;
          }
        }
        
    res.status(200).json( ordersOfUser2[0].orders);

  }

module.exports=router;
