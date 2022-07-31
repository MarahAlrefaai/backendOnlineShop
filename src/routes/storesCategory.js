'use strict'

const express = require('express')
const router=express.Router();
const { storesCategory}=require("../models/index.js");

// routers 

router.get('/storesCategory',getAllStoresCategory);
router.get('/storesCategory/:id',getOneStoresCategory);
router.post('/storesCategory',createStoresCategory);
router.delete('/storesCategory/:id',deleteStoresCategory);
router.put('/storesCategory/:id',updatedStoresCategory);

async function getAllStoresCategory(req,res) {
    let allStoresCategory = await storesCategory.findAll();//get model that we impot it from index.js
    res.status(200).json(allStoresCategory);
}

// localhost:3000/food (body:{firstName:'razan',lastName:'quran'})
async function createStoresCategory(req,res) {
    let newStoresCategory = req.body;//that we will add it from postman
    let postStoresCategory = await storesCategory.create(newStoresCategory);//let new inside this var(imagin it like new row)
    res.status(201).json(postStoresCategory);
}

// localhost:3000/food/2 
async function getOneStoresCategory(req,res) {
    let id = parseInt(req.params.id);
    let specificStoresCategory = await storesCategory.findOne({where:{id:id}})//finde specific users using id 
    res.json(specificStoresCategory);
}
async function deleteStoresCategory(req,res){
    let deleteId = parseInt(req.params.id);
    let deletedStoresCategory = await storesCategory.destroy({where:{id:deleteId}});
    res.status(204).json(deletedStoresCategory);
  }
  
  async function updatedStoresCategory(req,res){
    let id = req.params.id; 
    let body =req.body;
    let storesCategoryWanted = await storesCategory.findOne({where:{id:id}});
       const UpdatedStoresCategory = await storesCategoryWanted.update(body);
       res.status(201).json(UpdatedStoresCategory);
   }

module.exports=router;