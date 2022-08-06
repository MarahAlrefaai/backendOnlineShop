'use strict '

const sequelize = require("sequelize")

const products=(sequelize,DataTypes)=>sequelize.define('products',{
    productname:{
        type:DataTypes.STRING,
        allowNull:false
    }
    ,
    description:{
        type:DataTypes.STRING,
        allowNull:false
     
    }
    ,
    image:{
        type:DataTypes.STRING,
        allowNull:false
       
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    storeId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
module.exports=products;