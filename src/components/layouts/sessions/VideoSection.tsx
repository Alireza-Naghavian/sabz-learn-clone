"use client"
import { CourseSessionData } from '@/types/services/sessions&Topics.t';
import Plyr from 'plyr';
import { useEffect, useRef } from 'react';
import "./plyr.css";
function VideoSection({coursePoster,sessionData}:{coursePoster:string,sessionData:CourseSessionData}) {
  const videoRef = useRef<HTMLVideoElement|null>(null)

  useEffect(()=>{
    if(typeof window !==undefined && videoRef.current){
      
      const player  = new Plyr(videoRef.current)
    }

  },[])
  return (
   <>
    <div className='aspect-video mt-8 sm:mt-10  rounded-xl bg-darker'>
      <video ref={videoRef} id="player" playsInline controls  preload="metadata"   data-poster={coursePoster}>
  <source src={`http://localhost:4000/courses/covers/${sessionData?.video}`} type="video/mp4" />
 
  <track kind="captions" label="English captions" src={sessionData?.title} srcLang="en" default />
</video>

    </div>

   </>
  )
}

export default VideoSection