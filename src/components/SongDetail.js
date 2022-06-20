import React from 'react'
import { connect } from "react-redux";

function SongDetail({ mySelectedSong }) {
    // console.log(props);
    if (!mySelectedSong) {
        return (
            <div style={{backgroundColor:"#d9534f",padding:"30px"}}>
                Select a song!
            </div>
        );
    } else {
        return (
            <div style={{backgroundColor:"#5cb85c",padding:"30px"}}>
                <h3>Details for:</h3>
                <p>
                    Title: {mySelectedSong.title}
                    <br />
                    Duration : {mySelectedSong.duration}
                </p>
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    return {
        mySelectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);