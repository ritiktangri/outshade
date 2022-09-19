const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')
const userLogin = async (req, res) => {
    try {
        const user = req.body
        console.log(user)

        let{email, password} = user;
        let findUser = await userModel.findOne({
            email, password
        })
        // console.log(user)

        if (!findUser)
            res.status(404).send({ status: false, msg: "userpassword not found" });

        let token = jwt.sign({
            userId: findUser._id,
            email: findUser.email
        }, "chulluBaba")
        // console.log(token)

        res.header("tokeniscreated", token)
        res.status(201).send({ status: true, data: token })
    } catch (error) {
        res.status(500).send({ status: false, msg: error })
    }
}

module.exports = userLogin