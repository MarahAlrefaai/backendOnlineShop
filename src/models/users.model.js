'use strict '

const sequelize = require("sequelize")

const users=(sequelize,DataTypes)=>sequelize.define('users1',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    }
    ,
   lastName:{
        type:DataTypes.STRING,
       
    },
    mobileNumber:{
        type:DataTypes.STRING,
      
    },
    email:{
        type:DataTypes.STRING,
       
    },
    password: {
      
        type: DataTypes.STRING,
    }
  
});
module.exports=users;
