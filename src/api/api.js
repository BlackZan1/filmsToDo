import Axios from 'axios';

const API_KEY = 'b007e99d'

const instance = Axios.create({
    baseURL: 'http://www.omdbapi.com/'
})

export const getFilmsByTitle = (title) => {
    return instance.get(`?s=${title}&apikey=${API_KEY}`) // t - one film, s = range
    .then(res => res.data.Search)
} 