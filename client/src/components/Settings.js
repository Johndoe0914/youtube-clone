import e from 'cors';
import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { isAuthenticated, selectUser} from '../features/userSlice';
import axios from 'axios';
import './Settings.css';

const Settings = () => {
    const isAuth = useSelector(isAuthenticated);
    const user = useSelector(selectUser);
   const [channelInfo, setChannelInfo] = useState({
    userID: user.id,
    channelDescription: "",
    channelCategory: ''
});


const handleChange = name => event => {
    
    setChannelInfo({...channelInfo, [name]: event.target.value})
   
}

const handleSubmit = async (e) => {
    e.preventDefault()

    try{
        const res = await axios.put(`/api/user/channel/${user.id}`, channelInfo)
        console.log('The response',res)
    }catch(e){
        console.log(e)
    }
  
}
    return (
        <div className='settings'>
            {isAuth ? ( <div className='settings__channeldescription'>
            <h2>Welcome  to Video Bucket {user.displayName}! </h2>
            <p>Please fill out the information below so you can get started</p>
                <form>
                    <small>Channel Description</small>
                    <hr />
                    <textarea  onChange={ handleChange('channelDescription')} name='channelDescription' type='text' value={channelInfo.channelDescription} placeholder='Describe your channel'/>
                    <small>Channel Category</small>
                    <hr />
            <select onChange={handleChange('channelCategory')} name="channelCategory" >
                    <option >Please select from below</option>
                    <option value="Film&Animation">Film & Animation</option>
                    <option value="Autos&Vehicles">Autos & Vehicles</option>
                    <option value="Music">Music</option>
                    <option value="Pets&Animals">Pets & Animals</option>
                    <option value="Sports">Sports</option>
                    <option value="Travel&Events">Travel & Events</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="News& olitics">News & Politics</option>
                    <option value="Howto&Style">Howto & Style</option>
                    <option value="Education">Education</option>
                    <option value="Science&Technology">Science & Technology</option>
                    <option value="Nonprofits&Activism">Nonprofits & Activism</option>
         </select>
            <button type='submit' onClick={handleSubmit}> Create Channel</button>
                </form>
            </div>
            ) : <h1>Access is Restricted Please Sign Up</h1>}

           
        </div>
    )
}

export default Settings
