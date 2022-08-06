'use strict '

const sequelize = require("sequelize")

const stores=(sequelize,DataTypes)=>sequelize.define('stores1',{
    storename:{
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
        allowNull:false
       
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false
    },
    owner:{
        type:DataTypes.STRING,
        allowNull:false
    },
    storeCategoryId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
module.exports=stores;