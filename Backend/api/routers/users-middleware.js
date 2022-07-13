const bcrypt = require('bcryptjs')
const db = require('../data/db-config')
const jwt = require('jsonwebtoken')
const {secret} = require('../JWTsecrets')

const validateUser = (req,res,next) =>{
    const {username, password} = req.body
    if(username === undefined || username.trim() === '' || typeof username !== 'string' || password === undefined || password.trim() === '' || password.trim().length < 4){
        return next({status:400, message: 'Invalid username and/or password'})
    }else{
        next()
    }
}

const currentUser = async (req,res,next)=>{
    const {id} = req.params 
    const check = await db('users').where('user_id', id).first()
    if(check !== undefined){
        req.currentUser = check
        next()
    }else{
        return next({status:404, message: 'User could not be found with that ID'})
    }
}

const hashPassword = (req,res,next) =>{
    const {password} = req.body
    req.newUser = {
        username: req.body.username,
        password: bcrypt.hashSync(password, 12)
    }
    next()
}


const validLogin = async(req,res,next)=>{
    const {username, password} = req.body
    const check = await db('users').where({username}).first()
    if(bcrypt.compareSync(password, check.password) === false){
        return next({status:400, message: 'Invalid credentials'})
    }else{
        const token = generateToken(check)
        req.userToken = {
            message: `Welcome back ${check.username}`,
            token:token
        }
        next()
    }
}

const restricted = (req,res,next)=>{
    const token = req.headers.authorization
    if(token == null){
        return next({status:401, message: 'Token is required'})
    }
    if(jwt.verify(token, secret) === false){
        return next({status:401, message: 'Token is invalid'})
    }else{
        next()
    }
}

const removeUser = async (req,res,next)=>{
    const {id} = req.params
    await db('users').where('user_id',id).del()
    return res.json({message:`User id ${id} has been removed`})
}

function generateToken(user){
    const payload = {
        subject:user.user_id,
        username: user.username
    }
    const options ={
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options)
}


module.exports = {
    validateUser,
    hashPassword,
    validLogin,
    currentUser,
    restricted,
    removeUser
}