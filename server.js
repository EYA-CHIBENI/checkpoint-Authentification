const express = require ('express')
const ConnectDB = require('./config/ConnectDB')
const userRouter = require('./Routes/User')
const app=express()
require('dotenv').config()
ConnectDB()
app.use(express.json())
app.use('/api/userAuth',userRouter)










app.listen(process.env.port, console.log`server is running on ${process.env.port}`)