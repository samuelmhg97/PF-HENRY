const initialState = {
  movies: [],
  movieDetail: {},
  moviesFiltered: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload
      };
    case "GET_MOVIE_NAME":
      return {
        ...state,
        movies: action.payload
      }
    case "DEL_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: {}
      };
    case "FILTER_MOVIES":
      let moviesByFilter = [];
      console.log(action.payload)
      console.log(state.movies)
      if(action.payload.genre !== 'default' && action.payload.comingSoon !== 'default'){
        console.log('dos filtros')
        moviesByFilter = state.movies.filter(m => m.comingSoon.toString() === action.payload.comingSoon);
        console.log(moviesByFilter)
        moviesByFilter = moviesByFilter.filter(m => m.genre.indexOf(action.payload.genre) >= 0);
        console.log(moviesByFilter)
      }else if(action.payload.genre === 'default' && action.payload.comingSoon !== 'default'){
        moviesByFilter = state.movies.filter(m => m.comingSoon.toString() === action.payload.comingSoon);
      }else if(action.payload.genre !== 'default' && action.payload.comingSoon === 'default'){
        console.log('solo por genero')
        console.log(action.payload.genre)
        moviesByFilter = state.movies.filter(m => m.genre.indexOf(action.payload.genre) >= 0);
        console.log(moviesByFilter)
      }
      return {
        ...state,
        moviesFiltered: moviesByFilter
      };
    case "POST_MOVIE":
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
