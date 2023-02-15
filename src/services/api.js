import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=57e8f4826160c54d7bed990827a2b38e

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
