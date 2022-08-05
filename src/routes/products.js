'use strict'

const express = require('express')
const router=express.Router();
const { products}=require("../models/index.js");

// routers 

router.get('/products',getAllProducts);
router.get('/products/:id',getOneProducts);
router.post('/products',createProducts);
router.delete('/products/:id',deleteProducts);
router.put('/products/:id',updatedProducts);

async function getAllProducts(req,res) {
   
    let allProducts = await products.readRecord();//get model that we impot it from index.js
    res.status(200).json(allProducts);
}

// localhost:3005/getOneProducts (body:{firstName:'razan',lastName:'quran'})
async function createProducts(req,res) {
    let newProducts = req.body;//that we will add it from postman
    let postProducts = await products.createRecord(newProducts);//let new inside this var(imagin it like new row)
    res.status(201).json(postProducts);
}

// localhost:3005/getOneProducts/2 
async function getOneProducts(req,res) {
    
    let id = parseInt(req.params.id);
    let specificproducts = await products.readRecord(id)//finde specific users using id 
    res.json(specificproducts);
}
async function deleteProducts(req,res){
   
    let deleteId = parseInt(req.params.id);
    let deletedproducts = await products.deleteRecord(deleteId);
    res.status(204).json(deletedproducts);

  }
  
  async function updatedProducts(req,res){
    let id = req.params.id; 
    let body =req.body;
   
       const Updatedproducts = await products.updateRecord(body,id);
       res.status(201).json(Updatedproducts);
   }

module.exports=router;