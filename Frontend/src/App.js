import './App.css';
import {useState, useEffect} from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import MainPage from './components/MainPage'

function App() {
  const [user,setUser] = useState({
    username:'', 
    password:''
})

const [tasks, setTasks] = useState([])

const onInputChange=evt=>{
    const {name, value} = evt.target
    setUser({...user, [name]:value})
}

const onSubmit = evt =>{
  evt.preventDefault()
  console.log(evt.target)
}
  return (
    <div className="App">
        
        <div className = 'mainBanner'>
          <div>Task Logger</div>
          <nav>
            <Link to='/login' >Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/logout'>Logout</Link>
          </nav>
        </div>
       
      <Routes>
        <Route exact path='/' element ={<MainPage/>} />
        <Route path='/login' element ={<Login onInputChange = {onInputChange} onSubmit = {onSubmit}/>} />
        <Route path='/register' element ={<Register/>} />
        <Route path='/logout' element ={<Logout/>} />
      </Routes>
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