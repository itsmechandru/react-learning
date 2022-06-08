import React from 'react'

function VideoDetail({ videoDetA }) {
    if (!videoDetA) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${videoDetA.id.videoId}`

    return (
        <div>
            <div className='ui embed'>
                <iframe
                    src={videoSrc}
                    title={videoDetA.snippet.title}
                />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>
                    {videoDetA.snippet.title}
                </h4>
                <p>
                    {videoDetA.snippet.description}
                </p>
            </div>

        </div>
    )
}

export default VideoDetail