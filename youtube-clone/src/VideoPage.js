import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {db} from './firebase';

import Comments from "./VideoPageComments";

import "./VideoPage.css";



const VideoPage = ({ match }) => {
  const [showMore, setShowMore] = useState(false);
  const [youtubeVideo, setYoutubeVideo] = useState([]);
  const [videos, setVideos] = useState([
    {
      name: "lil uzi vert",
      videoUrl: "https://www.youtube.com/watch?v=hihYATpt9oo",
      videoId: "WiLhjf6UrBs5VGBEeIbV",
    },
    {
      name: "Dan Robinson",
      videoUrl: "https://www.youtube.com/watch?v=C6zGEMMMjws",
      videoId: "2",
    },
  ]);
  const url = window.location.pathname;

    var urlId = url.substring(url.lastIndexOf("/") + 1);
  
  


  useEffect(() => {
    db.collection('videos').doc(urlId).onSnapshot(snapshot => {
      console.log(snapshot.data())
   setYoutubeVideo(snapshot.data())

    })
   


    return () => {
     
    };
  }, []);



  return (
    <div className='videoPage'>
      <div className='videoPage__Player'>
        <ReactPlayer
          className='videoPage__ReactPlayer'
          width=''
          height=''
          controls
          url={youtubeVideo.videoUrl}
          playing={true}
        />
        <div className='videoPage__PlayerInfo'>
  <h3> {youtubeVideo.videoTitle ? youtubeVideo.videoTitle: null}</h3>
          <br />
          <small> {youtubeVideo.videoViews} views • Aug 29, 2020</small>

          <span>
            <ThumbUpIcon className='icon' fontSize='small'/>
  <small>{youtubeVideo.videoLikes ? youtubeVideo.videoLikes: null}</small>
            <ThumbDownIcon className='icon' fontSize='small'/>
            <small>{youtubeVideo.videoDislikes ? youtubeVideo.videoDislikes: null}</small>
            <ShareIcon className='icon'fontSize='small'/>
            <small>SHARE</small>
          
            <PlaylistAddIcon className='icon'fontSize='small'/>
            <small>SAVE</small>
            <MoreHorizIcon className='icon' fontSize='small' />
          </span>
        </div>
        <hr />
        <div className='videoPage__ProfileInfo'>
          <Avatar src={youtubeVideo.channelImage ? youtubeVideo.channelImage: null} />
  <div><h4>{youtubeVideo.channel ? youtubeVideo.channel: null}</h4>
           
           <small>{youtubeVideo.channelSubs ? youtubeVideo.channelSubs: null} subscribers</small></div>
          <span>
            <button>SUBSCRIBE</button>
          </span>
        </div>

        {showMore ? (
          <p>{youtubeVideo.videoDesc ? youtubeVideo.videoDesc.substring(0, 1000): null}</p>
        ) : (
          <p>{youtubeVideo.videoDesc ? youtubeVideo.videoDesc.substring(0, 400) : null}</p>
        )}
        <hr />
        <span
          onClick={
            showMore ? (e) => setShowMore(false) : (e) => setShowMore(true)
          }
          className='videoPage__ShowMore'
        >
          {showMore ? <ExpandLessOutlinedIcon/>: <ExpandMoreOutlinedIcon />}
        <small>{showMore ? 'Show Less': 'Show More'}</small>
        </span>
        <Comments dbID={urlId} comments={youtubeVideo.videoComments}/>
      </div>
    </div>
  );
};

export default VideoPage;
