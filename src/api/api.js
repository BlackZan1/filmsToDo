import Axios from 'axios';

const API_KEY = 'b007e99d'

const instance = Axios.create({
    baseURL: 'www.omdbapi.com/'
})

export const getFilmsByTitle = (title) => {
    return instance.get(`?s=${title}&apikey=${API_KEY}&page=${1}`) // t - one film, s = range
    .then(res => res.data.Search)
} 