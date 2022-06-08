import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7IfIsyProMrGHRh_p1KuDamUXr2BXA1b8VfNSpfW1pE'
    }
});
