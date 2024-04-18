import axios from 'axios'

// BASE DA URL
// movie/now_playing?api_key=88a65939ca18f60c284da99205a4fbcf&language=pt-BR



const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

})

export default api;