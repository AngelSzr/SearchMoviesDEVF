import axios from "axios"
const apiKey = 'ea92314d'
const URL = `http://www.omdbapi.com/?apikey=${apiKey}`

export const getMovies = (query) => {
    return axios.get(`${URL}&s=${query}`).then(response => response).catch()
}
export const getMovie = (id) => {
    return axios.get(`${URL}&i=${id}`).then(response => response).catch()
}

