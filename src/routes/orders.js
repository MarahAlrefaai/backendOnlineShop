'use strict'

const express = require('express')
const router=express.Router();
const { orders}=require("../models/index.js");

// routers 

router.get('/orders',getAllOrders);
router.post('/orders',createOrders);
router.delete('/orders/:id',deleteOrders);


async function getAllOrders(req,res) {
   
    let allOrders = await orders.readRecord();//get model that we impot it from index.js
    res.status(200).json(allOrders);
}

// localhost:3005/getOneOrders (body:{firstName:'razan',lastName:'quran'})
async function createOrders(req,res) {
    let newOrders = req.body;//that we will add it from postman
   console.log(newOrders)
    let postOrders = await orders.createRecord(newOrders);//let new inside this var(imagin it like new row)
    console.log(postOrders)
    res.status(201).json(postOrders);
}

async function deleteOrders(req,res){
   
    let deleteId = parseInt(req.params.id);
    let deletedorders = await orders.deleteRecord(deleteId);
    res.status(204).json(deletedorders);

  }
  
  

module.exports=router;