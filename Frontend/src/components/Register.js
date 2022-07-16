import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'



function Register(props){
    const navigate = useNavigate()
    const [passwordErrorCheck, setPasswordErrorCheck] = useState('')

    const checkPasswordMatch = e =>{
        props.passwordCheck === e.target.value ? setPasswordErrorCheck('') : setPasswordErrorCheck('Passwords do not match')
    }

    const returnToLoginPage = e =>{
        navigate('/login')
    }

    useEffect(()=>{
        props.resetUser()
    },[])

    return(
        <div className = 'loginContainer'>
            <div className='loginDiv'>
                <form className = 'loginForm' name = 'login' onSubmit = {props.onSubmit}>
                    <h2>Register</h2>
                    <div className = 'formEntry'>
                        <input name = 'username' type='text' placeholder ='Enter your username' onChange = {props.onInputChange}></input>
                    </div>
                    <div className = 'formEntry'>
                        <input name = 'password' type='text' placeholder ='Enter your Password' onChange = {props.onInputChange}></input>
                    </div>
                    <div className = 'formEntry'>
                        <input name = 'passwordConfirm' type='text' placeholder ='Re-enter your Password' onChange = {checkPasswordMatch}></input>
                    </div>
                    <div>{passwordErrorCheck}</div>
                    <div className = 'formEntry'>
                        <button>Submit</button>
                        <button type = 'button' onClick = {()=>returnToLoginPage()}>Return to Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default Register