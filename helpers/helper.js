
const collection = require('../config/collection')
const db=require('../config/connection')
const bcrypt=require('bcrypt')
module.exports={

    Adduser:(userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USERCOLLECTION).insertOne(userDetails).then((result)=>{
            
                resolve(true)
            })
        })
    },
    checkUser:(userDetails)=>{
        return new Promise(async(resolve,reject)=>{
            let user=await db.get().collection(collection.USERCOLLECTION).findOne({email:userDetails.email})
            if(user){
                bcrypt.compare(userDetails.password,user.password).then((status)=>{
                    console.log(status);
                    if(status){
                        console.log("password correct annooo");
                       
                            resolve(user)
                        
                    }else{
                        resolve(false)
                    }
                })
    
                
            }else{
                res.json(user)
            }
        })
    },
    getUserdetails:()=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USERCOLLECTION).find().toArray().then((result)=>{
                resolve(result)
            })
        })
    }
    
}