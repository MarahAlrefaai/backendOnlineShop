'use strict'

const express = require('express')
const router=express.Router();
const { stores}=require("../models/index.js");
const {products}=require("../models/index.js");
const {users}=require("../models/index.js");
// routers 

router.get('/stores',getAllStores);
router.get('/stores/:id',getOneStores);
router.post('/stores',createStores);
router.delete('/stores/:id',deleteStores);
router.put('/stores/:id:name',updatedStores);
router.get('/readProductsForStore/:id',readProductsForStore);
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
// {
//     "name":"marah"
// }
    let currentUser = req.body;
    // console.log("currentUser" , currentUser)
    // console.log("currentId" , deleteId)
    let wantesstore = await stores.readRecord(deleteId);
    let thisUser = await users.readRecord(currentUser.userId);
      console.log("thisUser" , thisUser)
    if(wantesstore.owner==currentUser.name || thisUser.role =="admin"){
    let deletedstores = await stores.deleteRecord(deleteId);
    res.status(204).json(deletedstores);
    }else{
      res.send("sorry this is not you store  ");
    }

  }
  
  async function updatedStores(req,res){
    let id = req.params.id; 
    let body =req.body;
   
       const Updatedstores = await stores.updateRecord(body,id);
       res.status(201).json(Updatedstores);
   }
   async function readProductsForStore(req,res) {
    console.log(products)
    let id = parseInt(req.params.id);
    let StoresProducts = await stores.readStoreForCategory(products);//get model that we impot it from index.js
    //this for loop to get store of specific category 
        const currProducts2 = StoresProducts.filter(myFunction);
        function myFunction(value, index, array) {
          if(value.id == id){
            return value.products;
          }
        }
        
    res.status(200).json( currProducts2[0].products);
}
module.exports=router;