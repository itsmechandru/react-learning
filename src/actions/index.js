// Action Creator
export const selectSong = (song) => {
    // Returns action
    return {
        type: "SONG_SELECTED",
        payload: song
    }
}

