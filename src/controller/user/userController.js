const userModel=require('../../model/userModel')



const createUser=async(req,res)=>{
    try {
        let user=req.body
        let User=new userModel(user)
        await User.save()
        res.status(201).send({status:true,data:User,msg:"event is created"})
    } catch (error) {
        console.log(error)
    }
}

module.exports=createUser