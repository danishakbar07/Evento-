const collection = require('../config/collection')
const db=require('../config/connection')
const bcrypt=require('bcrypt')
const helper = require('./helper')
const jwt = require('./jwt')
module.exports={
    getall:(req,res)=>{
    db.get().collection(collection.TUTORIALCOLLECTION).find().toArray().then((result)=>{
        console.log('hloo');
        console.log(result);
        res.json(result)
    })
    },
    addUser:(req,res)=>{
console.log('hlooo');
console.log(req.body);
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(req.body.password,salt,(err,hash)=>{
        console.log(hash);
        req.body.password=hash
        helper.Adduser(req.body).then((value)=>{
            res.json(value)
        })
      
    })
})
       
    },
    checkuser:(req,res)=>{
        helper.checkUser(req.body).then((user)=>{
            jwt.createToken(user).then((accesToken)=>{
                console.log("hihihiih");
                console.log(accesToken);
                res.cookie("acces-token",accesToken,{
                    maxAge:30*24*60*60*1000
                    

                }).json({success:true})
                
            })
            
        })

       
        
    },
    getUser:(req,res)=>{
        helper.getUserdetails().then((result)=>{
            res.json(result)
        })
    }
}