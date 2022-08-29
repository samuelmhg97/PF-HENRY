const axios = require("axios");
const apiKey = "4ef335cb";

// export function getMovies(){
//     return function(dispatch){
//         return axios.get('')
//         .then(r => r.json())
//         .then(d => dispatch({type: 'GET_MOVIES', payload: d}))
//         .catch(e => console.log(e));
//     }
// }

export function getMovieDetail(id) {
  return function (dispatch) {
    return axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then((r) => r.data)
      .then((d) => dispatch({ type: "GET_MOVIE_DETAIL", payload: d }))
      .catch((e) => console.log(e));
  };
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
