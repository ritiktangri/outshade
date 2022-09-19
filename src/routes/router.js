const express=require('express')
const router=express.Router()


const eventModel=require('../controller/eventController')
const userModel=require('../controller/userController')
const userlogin=require('../controller/userLogin')
const verify=require('../middleware/verify')
const updateUser=require('../controller/updateUser')
const jwt=require('jsonwebtoken')
const query=require('../controller/query')


router.post('/user',userModel)
router.post('/event',eventModel)
router.post('/login',userlogin)
router.put('/update/:id',verify,updateUser)
router.get('',query)


module.exports=router