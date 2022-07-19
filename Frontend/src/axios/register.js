import axios from 'axios'


const registerNewUser = user =>{
    axios.post('http://localhost:9000/api/users',user)
        .then(res =>{
            alert(`User created ${res.data.username}, you may now login`)
            console.log(res)
        })
        .catch(err=>{
            alert('Unable to create new user, please try again')
            console.log(err)
        })
}

const loginRequest = user =>{
    axios.post('http://localhost:9000/api/users/login',user)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
}


export {
    registerNewUser, loginRequest
}