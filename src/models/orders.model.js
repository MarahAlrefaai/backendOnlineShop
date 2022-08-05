'use strict '

const sequelize = require("sequelize")

const orders=(sequelize,DataTypes)=>sequelize.define('orders',{
   orderproductname:{
        type:DataTypes.STRING,
        allowNull:false
    }
    ,
   
    orderimage:{
        type:DataTypes.STRING,
       
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    numberofitems:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalprice:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});
module.exports=orders;