'use strict'
//this is middle ware for sign in auth 
const { users } = require('../../models/index.js');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');
const Secret = process.env.SECRET||"onlineshopsecretecode";

const basicAuth = async (req, res, next) => {

 if (req.headers['authorization']) {
    let bhp = req.headers.authorization.split(' ');
    let encoded = bhp.pop();
    let decode = base64.decode(encoded);
    let [firstName, password] = decode.split(':');
    console.log("firstName",firstName)
    try {
      const usersSigned = await users.readRecordBasedOnName(firstName);
      console.log("usersSigned ",usersSigned)
      const valid = await bcrypt.compare(password, usersSigned.password);
      console.log("valid ",valid)
      if (valid) {
        //create new instance in the req
        req.usersSigned = usersSigned;
        //-----------------------------------------
        //create token  this is for secure 
        let token = jwt.sign({ firstName: usersSigned.firstName }, Secret, { expiresIn: '15 min' });// in each time you try to log in you will have a new token        usersSigned.token = token;
        console.log("token ",token) 
        usersSigned.token = token;
        res.status(200).json(usersSigned);
        next();
      }
      else {
        //next("invalid users");
        res.send("invalid User");
      }
    }
    catch (error) {
      res.send("invalid Username");//next("invalid usersname");}}
    }}
  
  
  }
    module.exports = basicAuth;