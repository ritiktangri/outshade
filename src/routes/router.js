const express=require('express')
const router=express.Router()


const eventModel=require('../controller/event/eventController')
const userModel=require('../controller/user/userController')
const userlogin=require('../controller/user/userLogin')
const verify=require('../middleware/verify')
const updateUser=require('../controller/user/updateUser')
const jwt=require('jsonwebtoken')
const query=require('../controller/event/query')
const updateEvent=require('../controller/event/updateEvent')

router.post('/user',userModel)
router.post('/event',eventModel)
router.post('/login',userlogin)
router.put('/update/:id',verify,updateUser)
router.get('',query)
router.put('/eventUpdate/:id',updateEvent)


module.exports=router