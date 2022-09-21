const userModel=require('../../model/userModel')

const updateUser=async(req,res)=>{
    try {
        const _id=req.params.id;
        const user=req.body
        const updateUser=await userModel.findByIdAndUpdate(
            _id,
            user,
            {new:true}
        );
        res.status(200).send({status:true,data:updateUser,msg:"successfull"})
    } catch (error) {
        return res.status(500).send({status:true,msg:console.log(error)});
        
    }
}
module.exports=updateUser
