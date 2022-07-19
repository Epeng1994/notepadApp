import './App.css';
import {useState, useEffect} from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Posts from './components/Posts'
import {registerNewUser, loginRequest} from './axios/register'


function App() {
  const [user,setUser] = useState({
    username:'', 
    password:''
})

const [tasks, setTasks] = useState([{id:1,post:'First'},{id:2,post:'Second'},{id:3,post:'Third'}])

const onInputChange=evt=>{
    const {name, value} = evt.target
    setUser({...user, [name]:value})
}

const onSubmit = evt =>{
  evt.preventDefault()
  const {name}  = evt.target
  //axios call to login backend with user obj
  //Login axios
  //Register axios
  name === 'register' ? registerNewUser(user) : console.log('login')
}

const resetUser = e=>{
  setUser({
    username:'', 
    password:''
  })
}

  return (
    <div className="App">
        
        <div className = 'mainBanner'>
          <h1>NotePad</h1>
          <nav>
            <Link to='/login' >Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/logout'>Logout</Link>
          </nav>
        </div>
       
      <Routes>
        <Route path='/posts' element ={<Posts tasks={tasks}/>} />
        <Route path='/login' element ={<Login resetUser = {resetUser} onInputChange = {onInputChange} onSubmit = {onSubmit}/>} />
        <Route path='/register' element ={<Register resetUser = {resetUser} onInputChange = {onInputChange} onSubmit = {onSubmit} passwordCheck = {user.password}/>} />
        <Route path='/logout' element ={<Logout/>} />
      </Routes>
      <a href='https://www.freepik.com/psd/mug-mockup'>Mug mockup psd created by rawpixel.com - www.freepik.com</a>
    </div>
  );
}

export default App;


/*
Components:
-Login
-Login/Register
-Logout

-Tasks
-Completed/Old Tasks


*/