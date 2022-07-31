'use strict '

const sequelize = require("sequelize")

const storesCategory=(sequelize,DataTypes)=>sequelize.define('storesCategory',{
    storeType:{
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
       
    }
});
module.exports=storesCategory;