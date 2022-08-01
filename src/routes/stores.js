'use strict'

const express = require('express')
const router=express.Router();
const { stores}=require("../models/index.js");

// routers 

router.get('/stores',getAllStores);
router.get('/stores/:id',getOneStores);
router.post('/stores',createStores);
router.delete('/stores/:id',deleteStores);
router.put('/stores/:id',updatedStores);

async function getAllStores(req,res) {
   
    let allStores = await stores.readRecord();//get model that we impot it from index.js
    res.status(200).json(allStores);
}

// localhost:3005/getOneStores (body:{firstName:'razan',lastName:'quran'})
async function createStores(req,res) {
    let newStores = req.body;//that we will add it from postman
    let postStores = await stores.createRecord(newStores);//let new inside this var(imagin it like new row)
    res.status(201).json(postStores);
}

// localhost:3005/getOneStores/2 
async function getOneStores(req,res) {
    
    let id = parseInt(req.params.id);
    let specificstores = await stores.readRecord(id)//finde specific users using id 
    res.json(specificstores);
}
async function deleteStores(req,res){
   
    let deleteId = parseInt(req.params.id);
    let deletedstores = await stores.deleteRecord(deleteId);
    res.status(204).json(deletedstores);

  }
  
  async function updatedStores(req,res){
    let id = req.params.id; 
    let body =req.body;
   
       const Updatedstores = await stores.updateRecord(body,id);
       res.status(201).json(Updatedstores);
   }

module.exports=router;