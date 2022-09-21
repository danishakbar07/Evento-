const {sign,verify}=require ('jsonwebtoken')
require('dotenv').config()

module.exports={
    createToken:(user)=>{
        return new Promise((resolve,reject)=>{
            const accesToken= sign({username:user.name,userid:user._id},process.env.SecretKey)
            console.log(accesToken);
            resolve(accesToken)
        })
    },
    validateToken:async (req,res,next)=>{
        console.log("hloooooooo");
        console.log(req.cookies);
        const accesToken= await req.cookies['acces-token']
        console.log(accesToken);
        if(!accesToken){
            return res.json({err:"user not audhenticated"});
        }else{
            const valideToken=verify(accesToken,process.env.SecretKey);
            if(valideToken){
                return next()
            }else{
                return res.json({err:" token not valid"});
            }
        }
        

        
           
        
    }
}