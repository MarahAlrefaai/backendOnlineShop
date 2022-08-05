'use strict '

const sequelize = require("sequelize")

const users=(sequelize,DataTypes)=>sequelize.define('users5',{
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
    },
    role:{
        type:DataTypes.ENUM('admin','user'),
        defaultValue:'user'

    },
    action:{
        type:DataTypes.VIRTUAL,
        get(){
            const acl = {
            user: ['read','create', 'update', 'delete'],          
            admin: ['read', 'create', 'update', 'delete'],
        }
        return acl[this.role];
    },
    token:{
        type:DataTypes.VIRTUAL,//save it temporary
       // get() {return jwt.sign({ name: this.name }, SECRET);       }
      }
  
});
module.exports=users;
