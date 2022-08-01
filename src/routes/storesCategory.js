'use strict'

const express = require('express')
const router=express.Router();
const { storesCategory}=require("../models/index.js");
const {stores}=require("../models/index.js");
// routers 

router.get('/storesCategory',getAllStoresCategory);
router.get('/storesCategory/:id',getOneStoresCategory);
router.post('/storesCategory',createStoresCategory);
router.delete('/storesCategory/:id',deleteStoresCategory);
router.put('/storesCategory/:id',updatedStoresCategory);
router.get('/readStoreForCategory',readStoreForCategory);

async function getAllStoresCategory(req,res) {
   
    let allStoresCategory = await storesCategory.readRecord();//get model that we impot it from index.js
    res.status(200).json(allStoresCategory);
}

// localhost:3005/getOneStoresCategory (body:{firstName:'razan',lastName:'quran'})
async function createStoresCategory(req,res) {
    let newStoresCategory = req.body;//that we will add it from postman
    let postStoresCategory = await storesCategory.createRecord(newStoresCategory);//let new inside this var(imagin it like new row)
    res.status(201).json(postStoresCategory);
}

// localhost:3005/getOneStoresCategory/2 
async function getOneStoresCategory(req,res) {
    
    let id = parseInt(req.params.id);
    let specificstoresCategory = await storesCategory.readRecord(id)//finde specific users using id 
    res.json(specificstoresCategory);
}
async function deleteStoresCategory(req,res){
   
    let deleteId = parseInt(req.params.id);
    let deletedstoresCategory = await storesCategory.deleteRecord(deleteId);
    res.status(204).json(deletedstoresCategory);

  }
  
  async function updatedStoresCategory(req,res){
    let id = req.params.id; 
    let body =req.body;
   
       const UpdatedstoresCategory = await storesCategory.updateRecord(body,id);
       res.status(201).json(UpdatedstoresCategory);
   }
   
async function readStoreForCategory(req,res) {
    console.log(stores)
    let CategoryStores = await storesCategory.readStoreForCategory(stores.model);//get model that we impot it from index.js
    res.status(200).json(CategoryStores.stores1s);
}

module.exports=router;