"use strict"

// npm i pg (sequelize uses pg)
require('dotenv').config(); //this allows us to access database
const {Sequelize,DataTypes}= require("sequelize");
const storesCategory=require("./storesCategory.model.js")
const users=require("./users.model.js")
const Collection=require('./lib/collection.js');

//connection url
//process.env.DATABASE_URL ( localy )
const postgres_url=process.env.DATABASE_URL ||"postgres://marah:0000@localhost:5432/onlineshop";


//production --> if we want to deploy it on heroku we will use the code inside the if SSL

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }:{};

//{} => for ssl connection 
let sequelize = new Sequelize(postgres_url,sequelizeOptions)
let userModel=users(sequelize,DataTypes);
let userCollection=new Collection(userModel)
//------
let storesCategoryModel=storesCategory(sequelize,DataTypes);
let storesCategoryCollection=new Collection(storesCategoryModel)
//-----
module.exports={
    db:sequelize,// for connection 
   storesCategory: storesCategoryCollection,
    users:userCollection,

}