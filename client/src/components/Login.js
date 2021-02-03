import React, {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import  { login } from '../features/userSlice';
import './Login.css';



const Login = () => {


    const dispatch = useDispatch()
    const [userLogin, setUserLogin ] = useState(true);
    
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
            //dispatch user to redux
            dispatch(login({
                id: res.data.id,
                displayName: userDetails.name,
                email: userDetails.email,
                profilePic: userDetails.profilePic
            }))
        }
    }catch(e){
        alert('something went wrong try again')
      }
       
        
    }

    const isAuthenticated = () => {
        return {}
    }

    const loginToApp = async  (e) => {
        e.preventDefault()
   try{
    const res = await axios.post('http://localhost:5000/api/auth', (userDetails.email, userDetails.password))
    console.log(res)
     if(res.status === 200) {
         localStorage.setItem('token', JSON.stringify(res.data.token) )
         //dispatch User to Redux
         dispatch(login({
            id: res.data.id,
            displayName: userDetails.name,
            email: userDetails.email,
            profilePic: userDetails.profilePic
        }))
     }
   }catch(e) {
    alert('Username or Password is incorrect')
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
                <p onClick={userLogin ? (e) => setUserLogin(false) : (e) => setUserLogin(true)} >{userLogin ? (<small>Click here to sign up</small>) : (<small>Click here to login</small>)}</p>
                {userLogin ? <button type='submit' onClick={loginToApp}> Login</button>: <button type='submit' onClick={signUpToApp} >Sign up </button>}
                   

               </form>
               
           </div>
        </div>
    )
}

export default Login
