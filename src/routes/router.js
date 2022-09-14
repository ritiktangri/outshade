const express=require('express')
const router=express.Router()


const eventModel=require('../controller/eventController')
const userModel=require('../controller/userController')


router.post('/user',userModel)
router.post('/event',eventModel)


module.exports=router