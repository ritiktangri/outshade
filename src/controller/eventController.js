const eventModel=require('../model/eventModel')
// const userModel=require('../model/userModel')



const createEvents=async(req,res)=>{
    try {
        let user=req.body
        let event=new eventModel(user)
        await event.save()
        res.status(201).send({status:true,data:event,msg:"event is created"})
    } catch (error) {
        console.log(error)
    }
}

module.exports=createEvents