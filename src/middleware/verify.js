const jwt=require('jsonwebtoken')
// const userModel=require('../model/userModel')

const authorization=(req,res,next)=>{
    try {
        let token=req.headers["tokeniscreated"]
        console.log("user verified and now you can update" + token)
        if (!token)
        return res.status(401).send({status:false,msg: "token is not find"})

        let decodedToken=jwt.verify(token,"chulluBaba")
        if (!decodedToken)
        return res.status(401).send({status:false,msg:"token is invalid"}) 
 
        let userModified=req.params._id;
        let userLoggedIn=decodedToken._id;
        if(!userModified==userLoggedIn){
            return res.status(400).send({status:false,msg:"user is not valid for logged in"});
        }
       
        next();
        
    } catch (error) {
        res.status(500).send({status:false,msg:error.message})
    }
    
};
    
module.exports=authorization