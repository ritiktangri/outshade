const mongoose = require('mongoose')
const  ObjectId  = mongoose.Schema.Types.ObjectId
const createEvent = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    discription: {
        type: String
    },
    eventDate: {
        type: String, required: true
    },
    createdBy: {
        type: ObjectId, ref: "eventModel", require: true
    },
    invitations: [{
        invitee: { type: ObjectId, ref: "userModel", require: true },
        timings: {
            type: String, require: true
        }
    },]

}, { timestamps: true })

module.exports = mongoose.model('eventModel', createEvent)