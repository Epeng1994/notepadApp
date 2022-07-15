import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Login(props){
    const navigate = useNavigate()

    const returnToRegisterPage = e =>{
        navigate('/register')
    }
    useEffect(()=>{
        props.resetUser()
    },[])
    return(
        <div className = 'loginContainer'>
            <div className='loginDiv'>
                <form className = 'loginForm' onSubmit = {props.onSubmit}>
                    <h2>Login</h2>
                    <div className = 'formEntry'>
                        <input name = 'username' type='text' placeholder ='Enter your username' onChange = {props.onInputChange}></input>
                    </div>
                    <div className = 'formEntry'>
                        <input name = 'password' type='text' placeholder ='Enter your Password' onChange = {props.onInputChange}></input>
                    </div>
                    <div className = 'formEntry'>
                        <button>Submit</button>
                        <button type = 'button' onClick = {()=>returnToRegisterPage()}>Register here</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Login