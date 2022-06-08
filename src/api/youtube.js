import axios from "axios";

const KEY = 'AIzaSyBd0li01tz50Z3EiBeSGpHvgah3k_Z1pGQ';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        type:'video',
        key:KEY
    }
});