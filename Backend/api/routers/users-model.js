const db = require('../data/db-config')


//GET all users
async function getAllUsers(){
    return await db('users')
}
//GET user by ID
async function getUserById(user_id){
    return await db('users').where({user_id}).first()
}
//POST new user
async function addNewUser(user){
    const [id] = await db('users').insert(user)
    return getUserById(id)
}
//PUT user
async function updateUser(user_id, user){
    await db('users').where({user_id}).update(user)
    return getUserById(user_id)
}
//DELETE user




module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    updateUser 
}