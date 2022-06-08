import React from 'react'
import VideoItem from './VideoItem'

function VideoList({ videosA, onVideoSelectA }) {
    const renderedList = videosA.map(function (video) {
        return <VideoItem
            key={video.id.videoId}
            onVideoSelectV={onVideoSelectA}
            videosV={video}
        />
    })

    return (
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )
}

export default VideoList; 