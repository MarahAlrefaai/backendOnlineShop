"use strict"

// npm i pg (sequelize uses pg)
require('dotenv').config(); //this allows us to access database
const {Sequelize,DataTypes}= require("sequelize");
const storesCategory=require("./storesCategory.model.js")
const users=require("./users.model.js")
const stores=require("./stores.model.js")
const products=require("./products.model.js")
const orders=require("./orders.model.js")
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


//------


let userModel=users(sequelize,DataTypes);
let storesCategoryModel=storesCategory(sequelize,DataTypes);
let storesModel=stores(sequelize,DataTypes);
let productsModel=products(sequelize,DataTypes);
let ordersModel=products(sequelize,DataTypes);
//------
//this is means ( store category has many stores ) relation between tables
//sourceKey -->PK 

storesCategoryModel.hasMany(storesModel,{foreignKey:"storeCategoryId",sourceKey:'id'})
storesModel.belongsTo(storesCategoryModel,{foreignKey:"storeCategoryId",targetKey:'id'})
//-----
//------
//this is means ( store  has many products ) relation between tables
//sourceKey -->PK 

storesModel.hasMany(productsModel,{foreignKey:"storeId",sourceKey:'id'})
productsModel.belongsTo(storesModel,{foreignKey:"storeId",targetKey:'id'})
//-----
//------
//this is means ( user  has many orders ) relation between tables
//sourceKey -->PK 

userModel.hasMany(ordersModel,{foreignKey:"userId",sourceKey:'id'})
ordersModel.belongsTo(userModel,{foreignKey:"userId",targetKey:'id'})
//-----

let storesCategoryCollection=new Collection(storesCategoryModel)
let storesCollection=new Collection(storesModel)
let userCollection=new Collection(userModel)
let productsCollection=new Collection(productsModel)
let ordersCollection=new Collection(ordersModel)
//------------

module.exports={
    db:sequelize,// for connection 
   storesCategory: storesCategoryCollection,
    users:userCollection,
    stores:storesCollection,
    products:productsCollection,
    orders:ordersCollection,
}