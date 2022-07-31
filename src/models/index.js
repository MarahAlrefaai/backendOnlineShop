"use strict"

// npm i pg (sequelize uses pg)
require('dotenv').config(); //this allows us to access database
const {Sequelize,DataTypes}= require("sequelize");
const storesCategory=require("./storesCategory.model.js")
const users=require("./users.model.js")
//connection url
//process.env.DATABASE_URL ( localy )
const postgres_url=process.env.DATABASE_URL ||"postgres://marah:0000@localhost:5432/onlineshop";


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

module.exports={
    db:sequelize,// for connection 
   storesCategory:storesCategory(sequelize,DataTypes),
    users:users(sequelize,DataTypes),

}