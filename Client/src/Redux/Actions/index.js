const axios = require('axios');

export function getMovies(){
    return function(dispatch){
        return axios.get('http://api-pf-cine.herokuapp.com/movies')
        .then(r => r.data)
        .then(d => dispatch({type: 'GET_MOVIES', payload: d}))
        .catch(e => console.log(e));
    }
}

export function getMovieDetail(id){
    return function(dispatch){
        return axios.get(`http://api-pf-cine.herokuapp.com/movies/${id}`)
        .then(r => r.data)
        .then(d => dispatch({type: 'GET_MOVIE_DETAIL', payload: d}))
        .catch(e => console.log(e));
    }
}

export function delMovieDetail(){
    return {
        type: 'DEL_MOVIE_DETAIL'
    }
}