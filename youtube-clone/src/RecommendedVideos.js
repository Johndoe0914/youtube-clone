import React, {useState, useEffect} from "react";
import VideoCard from "./VideoCard";
import {db} from './firebase';
import { Link } from "react-router-dom";

import "./RecommendedVideos.css";


const RecommendedVideos = () => {

  const [recommendedVideos, setRecommendedVideos] = useState([]);

  
     

   
 


  useEffect(() => {
   const videos = async() =>  await db.collection('videos').onSnapshot((snapshot) => {

    setRecommendedVideos(
      snapshot.docs.map((doc) => (
        doc.data()
      ))
    )

    
  })
console.log(recommendedVideos)

  }, [recommendedVideos])



  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        
        <Link to={`/video/8n3y8T9uWtxz2xcSOulj`}>
          <VideoCard
            image='https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg'
            title='PlayerUnknowns Battlesgrounds '
            channel='JohnDoe0914'
            views='2.5M Views'
            timestamp='2 days ago'
            channelmage='https://yt3.ggpht.com/a/AATXAJzozydfMswYT98WDo2YdSCYzbvFTopTMeICiwwx=s900-c-k-c0xffffffff-no-rj-mo'
          />
        </Link>
        <Link to={`/video/2`}>
          <VideoCard
            image='https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg'
            title='PlayerUnknowns Battlesgrounds '
            channel='JohnDoe0914'
            views='2.5M Views'
            timestamp='2 days ago'
            channelmage='https://yt3.ggpht.com/a/AATXAJzozydfMswYT98WDo2YdSCYzbvFTopTMeICiwwx=s900-c-k-c0xffffffff-no-rj-mo'
          />
        </Link>
        <Link to={`/video/3`}>
          <VideoCard
            image='https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg'
            title='Among Us but IQ is 600 // #2'
            channel='PewDiePie'
            views='2.5M Views'
            timestamp='7 hours ago'
            channelmage='https://yt3.ggpht.com/a/AATXAJwTuzNgKRSLVIOcVTVGGr_xFKgo8LFSQF163hCKSQ=s48-c-k-c0xffffffff-no-rj-mo'
          />
        </Link>
        <Link to={`/video/4`}>
          <VideoCard
            image='https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg'
            title='PlayyerUnknowns Battlesgrounds LiveStream'
            channel='JohnDoe0914'
            views='2.5M Views'
            timestamp='2 days ago'
            channelmage='https://yt3.ggpht.com/a/AATXAJzozydfMswYT98WDo2YdSCYzbvFTopTMeICiwwx=s900-c-k-c0xffffffff-no-rj-mo'
          />
        </Link>
        <Link to={`/video/2736879`}>
          <VideoCard
            image='https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg'
            title='PlayyerUnknowns Battlesgrounds LiveStream'
            channel='JohnDoe0914'
            views='2.5M Views'
            timestamp='2 days ago'
            channelmage='https://yt3.ggpht.com/a/AATXAJzozydfMswYT98WDo2YdSCYzbvFTopTMeICiwwx=s900-c-k-c0xffffffff-no-rj-mo'
          />
        </Link>
        <Link to={`/video/2736879`}>
          <VideoCard
            image='https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg'
            title='PlayyerUnknowns Battlesgrounds LiveStream'
            channel='JohnDoe0914'
            views='2.5M Views'
            timestamp='2 days ago'
            channelmage='https://yt3.ggpht.com/a/AATXAJzozydfMswYT98WDo2YdSCYzbvFTopTMeICiwwx=s900-c-k-c0xffffffff-no-rj-mo'
          />
        </Link>
        <Link to={`/video/2736879`}>
          <VideoCard
            image='https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg'
            title='PlayyerUnknowns Battlesgrounds LiveStream'
            channel='JohnDoe0914'
            views='2.5M Views'
            timestamp='2 days ago'
            channelmage='https://yt3.ggpht.com/a/AATXAJzozydfMswYT98WDo2YdSCYzbvFTopTMeICiwwx=s900-c-k-c0xffffffff-no-rj-mo'
          />
        </Link>
        <Link to={`/video/2736879`}>
          <VideoCard
            image='https://i.pinimg.com/originals/a2/10/dd/a210dd7a861f3dfabc7e988528237332.jpg'
            title='PlayyerUnknowns Battlesgrounds LiveStream'
            channel='JohnDoe0914'
            views='2.5M Views'
            timestamp='2 days ago'
            channelmage='https://yt3.ggpht.com/a/AATXAJzozydfMswYT98WDo2YdSCYzbvFTopTMeICiwwx=s900-c-k-c0xffffffff-no-rj-mo'
          />
        </Link>
      </div>
    </div>
  );
};

export default RecommendedVideos;
