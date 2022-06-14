import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import "../api/youtube";
// import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

function App() {
    const [selectedVideo, setSelectedVideo] = useState(null)

    const [videos, search] = useVideos("")

    useEffect(() => {
        setSelectedVideo(videos[0]);


    }, [videos])








    return (
        <div style={{ margin: '10px 20px' }}>
            <SearchBar onFormSubmitVideo={search} />
            <div className="ui grid">
                <div className="row">
                    <div className="eleven wide column">
                        <VideoDetail videoDetA={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelectA={(video) => setSelectedVideo(video)}
                            videosA={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


