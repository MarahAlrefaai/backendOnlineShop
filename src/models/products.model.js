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
     
    }
    ,
    image:{
        type:DataTypes.STRING,
       
    },
    price:{
        type:DataTypes.INTEGER
    },
    storeId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
module.exports=products;