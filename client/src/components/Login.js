import React, {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import './Login.css';



const Login = () => {

    const [login, setlogin ] = useState(false);
    
    const [userDetails,setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        profilePic: '',

    })

    const signUpToApp = async (e) => {
        e.preventDefault()
      try{
        const res = await axios.post('http://localhost:5000/api/users', userDetails)
        console.log('response here',res)
        if(res.status === 200) {
            localStorage.setItem('token', JSON.stringify(res.data.token))
        }
    }catch(e){
        alert('something went wrong try a different email')
      }
       
        
    }

    const loginToApp = async  (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:5000/api/auth', (userDetails.email, userDetails.password))
       console.log(res)
        if(res.status(200)) {
            localStorage.setItem('token', )
        }

    }
    const handleChange = name => event => {
        setUserDetails({...userDetails, [name]: event.target.value})
        
    }


    return (
        <div className='login'>
           <div className='login__form'>
               
               <form>
            <input value={userDetails.name} onChange={handleChange('name')} type='text' placeholder='Full name required if registering'/>
            <input value={userDetails.profilePic} onChange={ handleChange('profilePic')} type='text' placeholder='Profile pic URL (optional)'/>
            <input value={userDetails.email}  onChange={ handleChange('email')} type='text' placeholder='Email'/>
            <input value={userDetails.password} onChange={ handleChange('password')}type='password' placeholder='Password' />
            <input value={userDetails.password2} onChange={ handleChange('password2')}type='password' placeholder='Retype Password' />
                <p >{login ? 'Login here' : 'Register here'}</p>
                {login ? <button type='submit' onClick={loginToApp}> Login</button>: <button type='submit' onClick={signUpToApp} >Sign up </button>}
                   
               </form>
               
           </div>
        </div>
    )
}

export default Login
