import React from 'react'



function Login(props){

    return(
        <div className = 'loginContainer'>
            <div className='loginDiv'>
                <form onSubmit = {props.onSubmit}>
                    <h2>Login</h2>
                    <div>
                        <label for='username'>Username</label>
                        <input name = 'username' type='text' placeholder ='Enter your username' onChange = {props.onInputChange}></input>
                    </div>
                    <div>
                        <label for='password'>Password</label>
                        <input name = 'password' type='text' placeholder ='Enter your Password' onChange = {props.onInputChange}></input>
                    </div>
                    <div>
                        <button>Submit</button>
                        <button>New? Register here</button>
                    </div>
                </form>
            </div>
            






        </div>
    )
}



export default Login