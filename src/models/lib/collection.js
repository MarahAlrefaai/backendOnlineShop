'use strict'
//tjis class for crud operations
class Collection {
constructor(model){
    this.model=model;
}


//obj is thebody information
async createRecord(obj){
    try{
        
        let newRecord= await this.model.create(obj);
        return newRecord
    }
    catch(err){
        console.error(`error in creating new record ${this.model.name}`)
    }
}
//--------------------
async readRecord(id){
    try{
        if(id){      
        return  await this.model.findOne({where:{id:id}})
    }
    else{
        return await this.model.findAll();
        
    }
}
    catch(err){
        console.error(`error in reading  record ${this.model.name}`)
    }
}
//--------------------
async readRecordBasedOnName(firstName){
    try{
             console.log(firstName)
        return  await this.model.findOne({ where: { firstName: firstName } });
    
}
    catch(err){
        console.error(`error in reading  record ${this.model.name}`)
    }
}
//--------------------
//--------------------
async readRecordBasedOnToken(userToken){
    try{
             
        return  await this.model.findOne({ where: { firstName: userToken.firstName } });
    
}
    catch(err){
        console.error(`error in reading  record ${this.model.name}`)
    }
}
//--------------------
async updateRecord(body,id){
    try{

    let recordWanted = await this.model.findOne({where:{id:id}});
      return await recordWanted.update(body);
     
    }
    catch(err){
        console.error(`error in creating new record ${this.model.name}`)
    }
}
//--------------------
async deleteRecord(id){
    try{
       
    
       return await this.model.destroy({where:{id:id}})
    }
    catch(err){
        console.error(`error in deleting record ${this.model.name}`)
    }
}
//-----------------
async readStoreForCategory(stores){
    try{
       
       return await this.model.findAll({ include: [stores.model] })
   
}
    catch(err){
        console.error(`error in getting stores of category  record ${this.model.name}`)
    }
}
//-----------------
async readordersForspicificUser(orders){
    try{
        console.log(orders)
       
       return await this.model.findAll({ include: [orders.model] })
   
}
    catch(err){
        console.error(`error in getting orders of user  record ${this.model.name}`)
    }
}
}
module.exports=Collection;