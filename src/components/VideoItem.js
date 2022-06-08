import React from 'react';
import "./VideoItem.css";

function VideoItem({ videosV,onVideoSelectV }) {
  // console.log(videosV.snippet);
  const videoTitle = videosV.snippet.title;
  const videoImage = videosV.snippet.thumbnails.medium.url;
  const videoAlt = videosV.snippet.description;
  return (
    <div onClick={() =>  onVideoSelectV(videosV)} className='video-item item'>
      <img alt={videoAlt} className='ui image' src={videoImage} />
      <div className='content'>
        <div className='header'>
          {videoTitle}
        </div>
      </div>

    </div>
  )
}

export default VideoItem;