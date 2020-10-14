import React, {useState, useEffect} from "react";
import VideoCard from "./VideoCard";
import {db} from './firebase';
import { Link } from "react-router-dom";

import "./RecommendedVideos.css";


const RecommendedVideos = () => {

  const [recommendedVideos, setRecommendedVideos] = useState([]);

  
     


  useEffect(() => {
    db.collection('videos').get().then(snapshot => {
    const snapshotRef = snapshot.docs.map((doc ,i) => ({
      id: doc.id,
      data: doc.data()
    }))
    
   console.log(snapshotRef)
        setRecommendedVideos(
         snapshotRef
        )
    })


  }, [])



  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
 
      <div className='recommendedVideos__videos'>
    {recommendedVideos ? (recommendedVideos.map((video, i) => (
            <Link to={`/video/${video.id}`}  style={{ textDecoration: 'none' }}>
            <VideoCard
            key={i}
              image={video.data.videoThumbnailImage}
              title={video.data.videoTitle}
              channel={video.data.channel}
              views={`${video.data.videoViews} views`}
              timestamp={`3 days ago`}
              channelmage={video.data.channelImage}
            />
          </Link>
        ))): null}


       
      </div>
    </div>
  );
};

export default RecommendedVideos;
