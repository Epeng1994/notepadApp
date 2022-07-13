const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const userRouter = require('./routers/userRouters')


server.use(express.json())
server.use(helmet())
server.use(cors())

//Routes

server.use('/api/users', userRouter)

server.use((error,req,res,next)=>{
    res.status(error.status || 500).json({message: error.message || 'Server error'})
})

module.exports = server