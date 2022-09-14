const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())
const route=require('./routes/router')
mongoose.connect("mongodb://localhost:27017/outshade",{
    useNewUrlParser: true,

}).then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route)

app.listen(1005,()=>{
    console.log("App is running",1005)
})
