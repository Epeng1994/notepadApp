const express = require('express')
const routes = express.Router()
const usersModel = require('./users-model')
const {validateUser, hashPassword, currentUser, validLogin, restricted,removeUser} = require('./users-middleware')
routes.use(express.json())

//GET all users
routes.get('/', restricted, (req,res,next)=>{
    usersModel.getAllUsers()
        .then(result=> result ? res.json(result) : next({status:404, message:'Could not get all users'}))
        .catch(next)
})

//GET 1 user
routes.get('/:id', currentUser, (req,res,next)=>{
    res.json(req.currentUser)
})
//POST/ADD user
routes.post('/',validateUser, hashPassword, (req,res, next)=>{
    usersModel.addNewUser(req.newUser)
        .then(result=> result ? res.status(201).json(result) : next({status:404, message: 'User could not added'}))
        .catch(next)
})
//POST Login user
routes.post('/login', validateUser, validLogin, (req,res,next)=>{
    res.json(req.userToken)
})

//UPDATE/PUT task
routes.put('/:id',validateUser, currentUser, hashPassword, (req,res,next)=>{
    usersModel.updateUser(req.params.id, req.newUser)
        .then(result=> res.json(result))
        .catch(next)
})
//DELETE
routes.delete('/:id',(req,res,next)=>{
    usersModel.removeUser(req.params.id)
        .then(result=>result)
        .catch(next)
})



module.exports = routes
