'use strict'
const { users } = require('../../models/index.js');
const jwt = require('jsonwebtoken');
const Secret = process.env.SECRET || "firstTestToken";
const bearerAuth = async (req, res, next) => {
  if (req.headers.authorization) {
    const bearer = req.headers.authorization.split(' ');
    const token = bearer.pop();
    try {
      const userToken = jwt.verify(token, Secret);
      console.log(userToken)
      const userc = await users.readRecordBasedOnToken( userToken);
      if (userc) {
        req.userc = userc; next();
      }
      else{
        res.status(403).send("invalid logIn")
      
      }
    }
    catch (error) {
      //next("Invalid Login");
      res.status(403).send("invalid logIn")
    
    }
  }
  else {
    //  next(" empty token");
    res.status(403).send("empty token")
  }
}
module.exports = bearerAuth;