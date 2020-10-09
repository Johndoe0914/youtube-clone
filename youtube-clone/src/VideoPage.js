import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Comments from "./VideoPageComments";

import "./VideoPage.css";

const VideoPage = ({ match }) => {
  const [showMore, setShowMore] = useState(false);
  const [youtubeVideo, setYoutubeVideo] = useState({
    profileName: "",
    profileVideoUrl: "",
    profileVideoId: "",
  });
  const [videos, setVideos] = useState([
    {
      name: "lil uzi vert",
      videoUrl: "https://www.youtube.com/watch?v=hihYATpt9oo",
      videoId: "1",
    },
    {
      name: "Dan Robinson",
      videoUrl: "https://www.youtube.com/watch?v=C6zGEMMMjws",
      videoId: "2",
    },
  ]);

  useEffect(() => {
    const url = window.location.pathname;

    var urlId = url.substring(url.lastIndexOf("/") + 1);
    console.log(urlId);

    // const output = videos.filter((video) => {
    //   const info = video.videoId === urlId;

    //   return info;
    // });

    const filterVideo = (videoid) => {
      let info = videos.filter((video) => {
        return video.videoId === videoid;
      });

      setYoutubeVideo({
        profileName: info[0].name,
        profileVideoUrl: info[0].videoUrl,
        profileVideoId: info[0].videoId,
      });
      console.log("info", info);
    };

    filterVideo(urlId);

    console.log("vidoe id ->");

    // setYoutubeVideo({
    //   profileName: output[0].name,
    //   profileVideoUrl: output[0].videoUrl,
    //   profileVideoId: output[0].videoId,
    // });

    console.log("yuoutube video =>", youtubeVideo);

    return () => {};
  }, []);

  const desc =
    "Lorem Ipsum is simply dummy text of the printing and typesettingzindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesettingzindustry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <div className='videoPage'>
      <div className='videoPage__Player'>
        <ReactPlayer
          className='videoPage__ReactPlayer'
          width=''
          height=''
          controls
          url='https://www.youtube.com/watch?v=hihYATpt9oo'
        />
        <div className='videoPage__PlayerInfo'>
          <h3> My Random Duo was Cheating in Warzone...</h3>
          <br />
          <small> 748,493 views • Aug 29, 2020</small>

          <span>
            <ThumbUpIcon className='icon' fontSize='small'/>
            <small>2.8K</small>
            <ThumbDownIcon className='icon' fontSize='small'/>
            <small>1.2K</small>
            <ShareIcon className='icon'fontSize='small'/>
            <small>SHARE</small>
          
            <PlaylistAddIcon className='icon'fontSize='small'/>
            <small>SAVE</small>
            <MoreHorizIcon className='icon' fontSize='small' />
          </span>
        </div>
        <hr />
        <div className='videoPage__ProfileInfo'>
          <Avatar src='data:image/png;base64,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' />
          <div><h4>Johndoe0914</h4>
           
           <small>801K subscribers</small></div>
          <span>
            <button>SUBSCRIBE</button>
          </span>
        </div>

        {showMore ? (
          <p>{desc.substring(0, 1000)}</p>
        ) : (
          <p>{desc.substring(0, 400)}</p>
        )}
        <hr />
        <span
          onClick={
            showMore ? (e) => setShowMore(false) : (e) => setShowMore(true)
          }
          className='videoPage__ShowMore'
        >
          <ExpandMoreOutlinedIcon />
          <small>Show More</small>
        </span>
        <Comments />
      </div>
    </div>
  );
};

export default VideoPage;
