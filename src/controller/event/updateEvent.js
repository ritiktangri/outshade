const eventModel = require('../../model/eventModel')
const updateEvent = async (req, res) => {
    try {
        const id = req.params._id
        const datatoUpdate = req.body
        const update = await eventModel.findOneAndUpdate(id,datatoUpdate, { new: true })

        res.status(200).send({ status: true, msg: "Event Updated", updatedData:update })
        // if(!id){
        //     res.status(400).send({status:false,msg:"error"})
        // }
    } catch (error) {
     res.status(400).send({status:false,msg:"event not created"})
    }
}

module.exports=updateEvent