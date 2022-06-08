import React from "react";
import SearchBar from "./SearchBar";
import "../api/youtube";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.onSearchSubmit('')
    }

    onSearchSubmit = async (term) => {
        // console.log(term);
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        // console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo:response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        // console.log("From The App!",video);
        this.setState({
            selectedVideo: video
        });
    }

    render() {
        return (
            <div style={{margin:'10px 20px'}}>
                <SearchBar onFormSubmitVideo={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail videoDetA={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelectA={this.onVideoSelect} videosA={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;