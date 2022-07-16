import React from 'react'
import axios from 'axios'


const registerNewUser = user =>{
    axios.post('localhost:9000/api/users',user)
    .then(res =>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}



export {
    registerNewUser
}