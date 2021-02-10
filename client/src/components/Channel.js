import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {isAuthenticated, selectUser} from '../features/userSlice';
import {Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Channel.css';


const Channel = () => {
    const user = useSelector(selectUser);
    const [channelTabs, setChannelTabs] = useState({
        home: true,
        videos: false,
        playlists: false,
        community: false,
        channels: false,
        about: false,
        search: false
    })
    const [channelInfo, setChannelInfo] = useState({
        channelDisplayName: '',
        channelDescription: '',
        channelAvatar: '',
        channelJumboImage: 'https://www.businessbecause.com/uploads/default/schools/banners/Web-Banner-(1000-px-wide-and-300px-high).jpg',
        channelVideos: []
    })

    const getChannelInfo = async () => {
            try{
                let userInfo = await axios.get(`/api/user/channel/${user.id}`)
                if(!userInfo) {
                    console.log('no channel found')
                } else {
                    console.log('user info',userInfo)
                    setChannelInfo(...channelInfo,{channelDisplayName: userInfo.data.displayName ,channelDescription: userInfo.data.channelDescription, channelAvatar: userInfo.data.avatar})
                }
            }catch(err) {
                console.log(err)
            }
        
    }
   
     useEffect(() => {
        getChannelInfo()
     }, [])

     const setTab = (obj, value) => {
        Object.keys(obj).forEach((key) => {
            obj[key] = false
        });

        setChannelTabs({[value]: true})
     }

const {home, videos, playlists, community, channels, about} = channelTabs;
    return (
        <div className='channel'>
            <div className='channel__jumbotron'>
                <img src={channelInfo.channelJumboImage} alt='' />
                
            </div>
            <div className='channel__Info'>
                    <Avatar fontSize='large'  src={channelInfo.channelAvatar} />
                   <div className='channel__InfoAttb'> <h3>Jonathan diaz</h3>
                    <h5> 100.2K subscribers</h5></div>
                            <button>Subscribe</button>
                           
                
            </div>
            <div className='channel__tabs'>
                <ul>
                    <li onClick={() => setTab(channelTabs, 'home') }>HOME</li>
                    <li onClick={() => setTab(channelTabs, 'videos') }>VIDEOS</li>
                    <li onClick={() => setTab(channelTabs, 'playlists') }>PLAYLISTS</li>
                    <li onClick={() => setTab(channelTabs, 'community') }>COMMUNITY</li>
                    <li onClick={() => setTab(channelTabs, 'channels') }>CHANNELS</li>
                    <li onClick={() => setTab(channelTabs, 'about') } >ABOUT</li>
                    <li onClick={() => setTab(channelTabs, 'search') }><SearchIcon /></li>
                </ul>

                <div className='channel__tabsInfo'>
                    {home && (<div className='channel__tab'> 
                        <div className='channel__tabrecent'></div>
                    </div>)}
                    {videos && <h2>videos tab</h2>}
                    {playlists && <h2>playlist tab</h2>}
                    {community && <h2>community tab</h2>}
                    {channels && <h2>channel tab</h2>}
                    {about && <h2>about tab</h2>}

                </div>
            </div>
        </div>
    )
}

export default Channel
