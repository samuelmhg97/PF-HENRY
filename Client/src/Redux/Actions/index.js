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

export function getMovieName(name) {
  return async function(dispatch) {
    const json = await axios.get(`http://localhost:3001/movies?name=${name}`)
    return dispatch({
      type: "GET_MOVIE_NAME",
      payload: json.data
    })
  }
}

export function delMovieDetail(){
    return {
        type: 'DEL_MOVIE_DETAIL'
    }
}

export function postMovie(payload) {
  return async function (dispatch) {
    const json = await axios.post(
      `http://api-pf-cine.herokuapp.com/movies/create`,
      payload
    );
    return json;
  };
}

export function filterMovies(filtro){
  return {
    type: 'FILTER_MOVIES',
    payload: filtro
  }
}